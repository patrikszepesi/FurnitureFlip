import React, { useState,useContext,useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import toast  from 'react-hot-toast';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMediaQuery, Button, Typography,Grid, ListItem, ListItemAvatar,colors } from '@material-ui/core';
import { SectionHeader, SwiperImageMultiple, TypedText, IconAlternate } from '../../../../../components/molecules';
import { HeroShaped } from '../../../../../components/organisms';
import { Context } from "../../../../../context";
import RatingModal from "../../../../../components/modal/RatingModal";
import Rating from '@material-ui/lab/Rating';
import { useRouter } from "next/router";
import slugify from 'slugify';


const useStyles = makeStyles(theme => ({
  root: {
      width: '100%!important',
    },
  swiperNavButton: {
    width: `${theme.spacing(3)}px !important`,
    height: `${theme.spacing(3)}px !important`,
    padding: `${theme.spacing(2)}px !important`,
    top:  `${theme.spacing(-10)}px !important`,
  },
  desc:{
    width:'100'
  },
  button: {
    margin: theme.spacing(5),
    borderRadius: "5em",
    height: `${theme.spacing(6)}px !important`,
    width: `${theme.spacing(25)}px !important`,
    color: "#ffb74d",
    backgroundColor: "     #FFFFFF        ",
    border: '1px solid'

  },
  button2: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    backgroundColor: "     #FFFFFF        ",
    border: '1px solid',
    color: "#E34234",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width:'2',
    backgroundColor: "     #E5E8E8        ",
    color: "#FFFFFF",

  },
}));

const Hero = props => {
  const { className, item, ...rest } = props;
  const classes = useStyles();
  const [loading,setLoading]=useState(false)
  const [saved,setSaved]=useState('');
  const [dummy,setDummy]=useState(0)
  const router = useRouter();


  let [commentObj, setCommentObj] = useState({
    text:'',
    name:''
  });


const { state, dispatch } = useContext(Context);
const { user,backendCall } = state;


  useEffect(() => {
    if(user) loadCurrent()
  }, [dummy]);//saved here, update wishlist

  const loadCurrent= async ()=>{
    const { data } = await axios.get(`/api/user/${user._id}`);
    setSaved(data)
  }

  let conditionalText;
if(saved && saved.wishlist && saved.wishlist!=undefined){
  if(saved.wishlist.includes(item._id)){
    conditionalText='M??r elmentve'
  }else{
    conditionalText='Elmentem'
  }
}

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  const handlePaidEnrollment = async () => {
    setLoading(true);
    try {
      if (!user) router.push("/login");
      const { data } = await axios.post(`/api/paid-enrollment/${item._id}`);
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast.error('Sikeres regisztr??ci??, Email elk??ldve az emailc??medre', {
           duration: 4000,
    style: {
      border: '5px solid #E1C699',
      padding: '16px',
      color: '#713200',
      minWidth:'1450px',
      marginTop:'70px',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
      console.log(err);
      setLoading(false);
    }
  };


  const backendCallFalse = () => {
  dispatch({
    type: "SET_BACKEND_CALL_FALSE",
  });
};

  const handleRatingChange = async (event,name, value) => {

    event.preventDefault()
    let newValue = value;

    const newRatingObj = { ...commentObj, [name]: event.target.value };
    console.log(newRatingObj)

    setCommentObj(newRatingObj)
  };

let sold;
if(item.sold){
  sold="Eladva"
}else{
  sold=""
}

  const sendCommentToBackend = async() => {
    setTimeout(backendCallFalse,0);

  const { data } = await axios.post(`/api/comments/${item._id}`,{
    toSend:{...commentObj},
    user:user,
  });
  };

  if(backendCall===true){
      if(commentObj.text.length>2 && commentObj.name.length>0){
        sendCommentToBackend();
        toast.success("siker")
      }  else if(commentObj.text.length<3 || commentObj.name.length<3){
        toast.success('Hiba, kit??lt??tted az ??sszes mez??t?')
        backendCallFalse();
      }

    }


  const handleAddToWishList = async () => {
    try {
      if (!user) router.push("/login");
      const { data } = await axios.post(`/api/wishlist/${item._id}`);
      setDummy(dummy+1)
    } catch (err) {
      toast.error('Hiba', {
           duration: 4000,
    style: {
      border: '5px solid #E1C699',
      padding: '16px',
      color: '#713200',
      minWidth:'1450px',
      marginTop:'70px',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
      console.log(err);
    }
  };

  let images=item.images
  console.log(item)

  return (

    <div className={className} {...rest}>
    {item && item.sold ? <h1>Ezt a term??ket m??r eladta az elad??</h1>:<HeroShaped
    item={item}
      leftSide={
        <>
        <SectionHeader
            title={
              <>
                <span>
                {item.quality}
                  <Typography color="secondary" variant="inherit" component="span"> { item.name}</Typography>

                </span>

              </>
            }
            align="left"
            disableGutter
          />
          {sold}
        <Grid container spacing={0}>
              { item &&
                <Grid item xs={6} key={item._id} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="secondary" noWrap>
                    ??r:  { item.price + "forint"}
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="secondary" noWrap>
                    min??s??g:   { item.quality}
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="secondary" noWrap>
                    ??tvehet?? itt:  { item.city}
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="secondary" >
                    <span onClick={() => router.push(`/category/${slugify(item.category)}`)} >{item.category}</span>
                    </Typography>
                  </ListItem>
                  <div className={classes.root}>
                  </div>
                </Grid>
              }
            </Grid>
            <Button
              variant="contained"
              className={classes.button}
              disabled={loading || !user ||item.sold}
              onClick={handlePaidEnrollment}
              startIcon={<ShoppingCartRoundedIcon/>}

            >
              {user
                  ? "Megveszem"

                : "Jelentkezz be"}
            </Button>
            <Button
              variant="contained"
              className={classes.button2}
              disabled={loading || !user}
              onClick={handleAddToWishList}
              startIcon={<FavoriteIcon/>}

            >
              {conditionalText}
            </Button>

            <RatingModal  course={item} text={'K??rdezz'} >

          <textarea style={{marginBottom:'10px'}}
                value= {commentObj.name}
                onChange={(event, value) => {
                  handleRatingChange(event,'name',event.target.value)}}
                className='form-control'
                placeholder='Neved hogyan jelenjen meg az ??rt??kel??sen'
                rows={1}
                cols={1}>
          </textarea>

          <textarea style={{marginBottom:'10px'}}
                value= {commentObj.text}
                onChange={(event, value) => {
                  handleRatingChange(event,'text',event.target.value)}}
                className='form-control'
                placeholder='Milyen volt az Oktat?? ??s maga az ??ra'
                rows={10}
                cols={50}>
          </textarea>
      </RatingModal>



            </>

      }
      rightSide={
        <SwiperImageMultiple
          navigationButtonStyle={classes.swiperNavButton}
          items={images}
        />
      }
    />}

    </div>
  );
};



export default Hero;

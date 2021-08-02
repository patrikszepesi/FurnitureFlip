import React, {useState,useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Button, Typography,Grid, ListItem, ListItemAvatar,colors,Avatar,ListItemText,List } from '@material-ui/core';
import { SectionHeader, SwiperImageMultiple, TypedText, IconAlternate } from '../../../../../components/molecules';
import { HeroShaped, Map } from '../../../../../components/organisms';
import { Context } from "../../../../../context";
import { useRouter } from "next/router";
import slugify from 'slugify';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { loadStripe } from "@stripe/stripe-js";



const useStyles = makeStyles((theme) => ({

  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
  button: {
    margin: theme.spacing(2),
    borderRadius: "5em",
    height: `${theme.spacing(8)}px !important`,
    width: `${theme.spacing(20)}px !important`,
    color: "#32CD32",

    backgroundColor: "     #FFFFFF        ",'&:hover': {
       background: "#FFFACD",
    },
    border: '1px solid'

  },
  button2: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    backgroundColor: "     #FFFFFF        ",
    border: '1px solid',
    color: "#E34234",
  },

}));
//
const Contact = props => {
  const { data, item, className, ...rest } = props;
  const classes = useStyles();
  const [loading,setLoading]=useState(false)
  const [saved,setSaved]=useState('');
  const [dummy,setDummy]=useState(0)
  const router = useRouter();



  const { state, dispatch } = useContext(Context);
  const { user } = state;


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
    conditionalText='Már elmentve'
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
      setLoading(false);
    }
  };




  let sold;
  if(item.sold){
  sold="Eladva"
  }else{
  sold=""
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



  return (
    <>
    <div className={className} {...rest}>
    {item && item.sold ? (<h1>Ezt a terméket már eladta az eladó</h1>):(<HeroShaped
    item={item}
      leftSide={
        <>
        <div>
        <SectionHeader
            title={item.name}
            subtitle={item.description}
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
            data-aos="fade-up"
            align="left"
          />
          <List disablePadding>
            <ListItem disableGutters data-aos="fade-up">
              <ListItemAvatar>
                <Avatar
                  src="https://image.flaticon.com/icons/png/128/3314/3314401.png"
                  className={classes.icon}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Termék állapota"
                secondary={item.quality}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textSecondary',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textPrimary',
                }}
              />
            </ListItem>
            <ListItem disableGutters data-aos="fade-up">
              <ListItemAvatar>
                <Avatar
                  src="https://image.flaticon.com/icons/png/128/1225/1225295.png"
                  className={classes.icon}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Ár"
                secondary={`${item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Forint`}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textSecondary',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textPrimary',
                }}
              />
            </ListItem>
            <ListItem disableGutters data-aos="fade-up">
              <ListItemAvatar>
                <Avatar
                  src="https://image.flaticon.com/icons/png/128/2803/2803287.png"
                  className={classes.icon}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Átvétel"
                secondary={item.city}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textSecondary',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textPrimary',
                }}
              />
            </ListItem>
          </List>
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

        </div>
          <h4>Görgess leljebb, ha kérdésed van</h4>
            </>
      }

      rightSide={
        <SwiperImageMultiple
          navigationButtonStyle={classes.swiperNavButton}
          items={images}
        />
      }
    />)}

    </div>
    </>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Contact;

import React, { useState,useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import toast  from 'react-hot-toast';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMediaQuery, Button, Typography,Grid, ListItem, ListItemAvatar,colors } from '@material-ui/core';
import { SectionHeader, SwiperImageMultiple, TypedText, IconAlternate } from '../../../../../components/molecules';
import { HeroShaped } from '../../../../../components/organisms';
import { Context } from "../../../../../context";


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

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  let data=['onsdf','sdf','sdf','sdf','sdf','sdf','sdf','dsf']
  const handlePaidEnrollment = async () => {
    try {
      setLoading(true);
      // check if user is logged in
      if (!user) router.push("/login");
      // check if already enrolled
      const { data } = await axios.post(`/api/paid-enrollment/${item._id}`);
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast.error('Sikeres regisztráció, Email elküldve az emailcímedre', {
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
  let images=item.images
  console.log(images)

  return (
    <div className={className} {...rest}>
      <HeroShaped
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
                        {item.price + " forintért"}
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
                        {item.quality} { item.item}
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
                        {item.name}
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
                        {item.name}
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
                        {item.name}
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
                        {item.name}
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
                disabled={loading || !user}
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
                onClick={handlePaidEnrollment}
                startIcon={<FavoriteIcon/>}

              >
                {user
                    ? "Elmentem"

                  : "Elmentéshez Jelentkezz be"}
              </Button>



              </>

        }
        rightSide={
          <SwiperImageMultiple
            navigationButtonStyle={classes.swiperNavButton}
            items={images}
          />
        }
      />
    </div>
  );
};



export default Hero;

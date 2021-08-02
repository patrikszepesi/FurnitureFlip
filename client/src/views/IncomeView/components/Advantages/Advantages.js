import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from "react";
import { Context } from "../../../../../context";
import InstructorRoute from "../../../../../components/routes/InstructorRoute";
import axios from "axios";
import { stripeCurrencyFormatter } from "../../../../../utils/helpers";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Typography, colors } from '@material-ui/core';
import { LearnMoreLinkPlain } from '../../../../../components/atoms';
import { SectionHeader, IconAlternate } from '../../../../../components/molecules';
import { CardBaseStripe, DescriptionListIcon } from '../../../../../components/organisms';
import {
  DollarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  learnMoreLink: {
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
}));

const Advantages = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const [balance, setBalance] = useState({ pending: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sendBalanceRequest();
  }, []);

  const sendBalanceRequest = async () => {
    setLoading(true)
    const { data } = await axios.get("/api/instructor/balance");
    setBalance(data);
    setLoading(false)
  };

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const handlePayoutSettings = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/instructor/payout-settings");
      window.location.href = data;
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert("Unable to access payout settings. Try later.");
    }
  };




  return (

     <>
     { !loading &&  balance.pending ? (
        <div className={className} data-aos="fade-up" {...rest}>
        <>
        <SectionHeader
          title={
            <span>
            Itt tudod ellenőrizni és módosítani{' '}
              <Typography color="secondary" variant="inherit" component="span">
                pénzügyi adataidat
              </Typography>
            </span>
          }
          subtitle="A biztonsági okok miatt minden értékesített árud bevételét nem egyből, hanem 10 napon belül kapod meg"
          fadeUp
        />


        <Grid  spacing={isLg ? 10 : 2}>
          {balance.pending.map((bp, index) => (
            <Grid
              key={index}
              item
              container
              alignItems="center"
              direction="column"
              xs={12}
              sm={6}
              data-aos="fade-up"
            >
              <CardBaseStripe liftUp variant="outlined">
                <DescriptionListIcon
                  title={stripeCurrencyFormatter(bp)}
                  subtitle={'Jelenlegi bevételek az össes eladott termék után. Beleszámolva azokat az összegeket is amiket az eladó átutalt, de mi még nem utaltunk ki neked'}
                  icon={
                    <IconAlternate
                      fontIconClass={'fas fa-money-bill-wave'}
                      size="medium"
                      color={colors.blue}
                    />
                  }
                />
                <LearnMoreLinkPlain
                  title="Vásárlási és pénzügyi adatok"
                  variant="body1"
                  className={classes.learnMoreLink}
                  color="secondary"
                  onClick={handlePayoutSettings}

                />
              </CardBaseStripe>
            </Grid>
          ))}
        </Grid>
         </>
           </div>
    ): (   <h1>   <div className={classes.root}>
        <LinearProgress />
      </div></h1>
     )}
    </>


  );
};

Advantages.propTypes = {
  /** //
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Advantages;

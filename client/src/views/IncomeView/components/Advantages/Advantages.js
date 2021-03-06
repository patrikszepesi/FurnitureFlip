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
  SyncOutlined,
} from "@ant-design/icons";

const useStyles = makeStyles(theme => ({
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
            Itt tudod ellen??rizni ??s m??dos??tani{' '}
              <Typography color="secondary" variant="inherit" component="span">
                p??nz??gyi adataidat
              </Typography>
            </span>
          }
          subtitle="A biztons??gi okok miatt minden ??rt??kes??tett ??rud bev??tel??t 30 nap ut??n kapod meg"
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
                  subtitle={'Jelenlegi bev??telek az ??sses eladott term??k ut??n. Belesz??molva a m??g be nem folyt ??sszeget'}
                  icon={
                    <IconAlternate
                      fontIconClass={'fas fa-money-bill-wave'}
                      size="medium"
                      color={colors.blue}
                    />
                  }
                />
                <LearnMoreLinkPlain
                  title="V??s??rl??si ??s p??nz??gyi adatok"
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
    ): (   <h1> <SyncOutlined spin
    className="d-flex justify-content-center display-1 text-primary p-5"/></h1>
     )}
    </>


  );
};

Advantages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Advantages;

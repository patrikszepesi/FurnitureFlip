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
import { LearnMoreLink } from '../../../../../components/atoms';
import { SectionHeader, IconAlternate } from '../../../../../components/molecules';
import { CardBase, DescriptionListIcon } from '../../../../../components/organisms';
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
    const { data } = await axios.get("/api/instructor/balance");
    setBalance(data);
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
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <span>
            TheFront is a Website Kit Platform that Helps you to{' '}
            <Typography color="secondary" variant="inherit" component="span">
              Build the Right Website for you Customers
            </Typography>
          </span>
        }
        subtitle="At TheFront, we go to great lengths to provide you with the best, highest-quality components. In fact, we’re so confident about our kit, we even back our leads with a 95% accuracy guarantee."
        fadeUp
      />
      <h4>
        Pending balance
        {balance.pending &&
          balance.pending.map((bp, i) => (
            <span key={i} className="float-right">
              {stripeCurrencyFormatter(bp)}
            </span>
          ))}
      </h4>
      <h4>
        Payouts{" "}
        {!loading ? (
          <SettingOutlined
            className="float-right pointer"
            onClick={handlePayoutSettings}
          />
        ) : (
          <SyncOutlined spin className="float-right pointer" />
        )}
      </h4>
      <Grid container spacing={isLg ? 10 : 2}>
        {data.map((item, index) => (
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
            <CardBase liftUp variant="outlined">
              <DescriptionListIcon
                title={item.title}
                subtitle={item.description}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.blue}
                  />
                }
              />
              <LearnMoreLink
                title="Learn more"
                variant="body1"
                className={classes.learnMoreLink}
                color="secondary"
              />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
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

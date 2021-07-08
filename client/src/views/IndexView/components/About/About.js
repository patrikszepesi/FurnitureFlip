import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { CardBase } from '../../../../../components/organisms';

const useStyles = makeStyles(theme => ({
  playIcon: {
    width: 40,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
    },
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              Vegyél vagy Adj
            </Typography>{' '}
          el bármit egy kattintással
          </span>
        }
        subtitle="Célunk az újrahasznosítás, és, hogy ne vesszen vészbe semmmilyen termék."
        ctaGroup={[
          <Button color="primary" variant="contained" size="large">
            Eladni akarok
          </Button>,
          <Button color="secondary" variant="outlined" size="large">
            Venni akarok
          </Button>,
        ]}
        data-aos="fade-up"
      />
      <CardBase withShadow liftUp variant="outlined" data-aos="fade-up">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <Image
                className={classes.playIcon}
                src="https://assets.maccarianagency.com/the-front/illustrations/play-icon.svg"
                alt="Play Video"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Image
                  src="https://assets.maccarianagency.com/the-front/illustrations/design-team.svg"
                  alt="Play Video"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;

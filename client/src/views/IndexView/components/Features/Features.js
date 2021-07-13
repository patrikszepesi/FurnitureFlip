import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, colors, makeStyles } from '@material-ui/core';
import { SectionHeader, IconAlternate } from '../../../../../components/molecules';
import { CardBase, DescriptionListIcon } from '../../../../../components/organisms';
import { Icon } from '../../../../../components/atoms';

const useStyles = makeStyles(theme => ({
  featureCardFirstItem: {
    background: theme.palette.secondary.main,
    '& h3, & h6': {
      color: 'white',
    },
  },
  featureIcon: {
    fontSize: 120,
    marginBottom: theme.spacing(2),
  },
  featureCard: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      minHeight: 550,
    },
  },
  featureCardSecondItem: {
    border: `2px solid ${theme.palette.text.primary}`,
    marginTop: 0,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(30),
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        data-aos="fade-up"
        title="Céljaink."
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardBase
            noShadow
            liftUp
            className={clsx(classes.featureCard, classes.featureCardFirstItem)}
          >
            <DescriptionListIcon
              title="Segíteni neked pénzt kereseni"
              subtitle="Mi nem számolunk fel semmilyen extra kölgséget tőled,nincs hírdetési költség, csak egy kis jutalékot kérünk el tőled"
              icon={
                <Icon
                  fontIconClass="fas fa-hand-holding-usd"
                  size="large"
                  fontIconColor={'white'}
                  className={classes.featureIcon}
                />
              }
              titleVariant="h3"
              subtitleVariant="h6"
            />
          </CardBase>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardBase
            noShadow
            liftUp
            className={clsx(classes.featureCard, classes.featureCardSecondItem)}
          >
            <DescriptionListIcon
              title="Zero Waste"
              subtitle="Bíztatni az embereket arra, hogy vigyázzanak a környezetre, és, hogy ne vegyenek mindenből újat. Ezért is ajánljuk fel az összes bevételünk 5%-át zöld tevékenységekre"
              icon={
                <Icon
                  fontIconClass="fas fa-recycle"
                  size="large"
                  fontIconColor={'textPrimary'}
                  className={classes.featureIcon}
                />
              }
              titleVariant="h3"
              subtitleVariant="h6"
            />
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;

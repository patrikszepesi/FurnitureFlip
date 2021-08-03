import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { IconAlternate } from '../../../../../components/molecules';
import { DescriptionListIcon, CardJobMinimal } from '../../../../../components/organisms';

const useStyles = makeStyles(theme => ({
  descriptionListIcon: {
    marginBottom: theme.spacing(2),
  },
  marginTop: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3),
    },
  },
}));

const Faq = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
    <h3>Kövesd ezt a 8 lépést, ha elakadtál, hogy, hogyan kell beállítani azt, hogy eladó lehess!</h3>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass={data.account.icon}
                size="medium"
                color={data.account.color}
                shape="circle"
              />
            }
            title={data.account.title}
            subtitle={data.account.subtitle}
            align="left"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            {data.account.items.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade-up">
                <CardJobMinimal
                  subtitle={item.updated}
                  title={`${item.title}`}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass={data.billing.icon}
                size="medium"
                color={data.billing.color}
                shape="circle"
              />
            }
            title={data.billing.title}
            subtitle={data.billing.subtitle}
            align="left"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            {data.billing.items.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade-up">
                <CardJobMinimal
                  title={item.title}
                  subtitle={`${item.updated}`}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Faq;

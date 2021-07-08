import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink, Image }from '../../../../../components/atoms';
import { SectionHeader } from '../../../../../components/molecules';
import { CardBase } from '../../../../../components/organisms';

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 50,
  },
}));

const Integrations = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
              <SectionHeader
                title="Ha már nem kell valami, add el itt."
                subtitle="Lehet valakinek pont az a régi fotogép kell ami ott porosodik a polcodon."
                align="left"
                label="100+ Integrations"
                ctaGroup={[
                  <LearnMoreLink
                    title="Tudj meg többet"
                    href="#"
                    variant="h6"
                  />,
                ]}
                disableGutter
                data-aos="fade-up"
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/progressive-app.svg"
                alt="Integrations"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <CardBase withShadow liftUp>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        className={classes.logo}
                        lazy={false}
                      />
                    </CardBase>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                title="Ha vennél valamit, tedd itt"
                subtitle="Miért vennél egy új könyvet, ha tudsz olcsóbban használtat venni amivel a környezetedet is tudod óvni?"
                align="left"
                label="100+ Integrations"
                ctaGroup={[
                  <LearnMoreLink
                    title="Tudj meg többet"
                    href="#"
                    variant="h6"
                  />,
                ]}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Integrations.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Integrations;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from '../../../../../components/molecules';
import {  Section, HeroSimpleBackground } from '../../../../../components/organisms';

const Hero = props => {
  const { className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      <HeroSimpleBackground backgroundImage="https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg">
        <Section narrow>
          <SectionHeader
            title={
              <span>
                Vegyél vagy add el {' '}
                <Typography color="secondary" variant="inherit" component="span">új vagy használt cuccaidat</Typography>
              </span>
            }
            titleVariant="h3"
            subtitle="Csak azért mert már nem használod, nem azt jelenti, hogy valaki nem fizetne érte pénzt. Óvd a környezeted, keress pénzt és nyerjen mindenki"
            ctaGroup={[
              <Button color="primary" variant="contained" size="large">
                 Miket tudok venni
              </Button>,
              <Button color="secondary" variant="outlined" size="large">
                Mi ez?
              </Button>,
            ]}
            disableGutter
          />
          <Typography
            variant="overline"
            align="center"
            component="p"
            color="primary"
          >
            Évente több ezer olyan terméket veszünk amit után egyből ki is dobunk
          </Typography>
        </Section>
      </HeroSimpleBackground>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;

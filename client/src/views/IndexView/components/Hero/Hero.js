import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from '../../../../../components/molecules';
import {  Section, HeroSimpleBackground } from '../../../../../components/organisms';
import backgroundImageSVG from '../../../../../public/assets/bgSVG3.svg'
import backgroundImageSVGDark from '../../../../../public/assets/4.svg'
import { useRouter } from "next/router";



const Hero = props => {
  const { className,themeMode, ...rest } = props;

  const router = useRouter();


  return (
    <div className={className} {...rest}>
      <HeroSimpleBackground backgroundImage={themeMode === 'light' ? backgroundImageSVG:backgroundImageSVGDark}>
        <Section narrow>
          <SectionHeader
            title={
              <span>
                Vegyél vagy adj el bármit biztonságosan, {' '}
                <Typography color="primary" variant="inherit" component="span">akár új, akár használt. </Typography>
              </span>
            }
            titleVariant="h3"
            subtitle="Csak azért mert már nem használod, nem azt jelenti, hogy valaki nem fizetne érte pénzt. Óvd a környezeted, keress pénzt és nyerjen mindenki"
            ctaGroup={[
              <Button onClick={()=>router.push("/categories")}color="primary" variant="contained" size="large">
                 Miket tudok venni
              </Button>,
              <Button onClick={()=>router.push("/what")} color="secondary" variant="outlined" size="large">
                Mi ez?
              </Button>,
            ]}
            disableGutter
          />
        </Section>
        <Typography
          variant="overline"
          align="center"
          component="p"
          color="primary"
        >
          Minden bevételünk után, 10%-ot félreteszünk különböző zöld projektekre
        </Typography>
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

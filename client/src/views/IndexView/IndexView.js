import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../../components/organisms';
import { GetStarted, QuickStart, Services } from './components';



import {
  About,
  Features,
  Hero,
  Integrations,
  Reviews,
  Subscription,
} from './components';

import { integrations, reviews } from './data';

const useStyles = makeStyles(theme => ({
  hero: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-9),
    },
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 100%, ${theme.palette.background.paper} 0%)`,
    [theme.breakpoints.up('md')]: {
      backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
    },
  },
  reviewSection: {
    background: theme.palette.secondary.main,
  },
  sectionSubscription: {
    paddingTop: 0,
  },
}));

const IndexView = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero data-aos="fade-up" className={classes.hero} />
      <SectionAlternate className={classes.sectionAlternate}>
        <About />
      </SectionAlternate>
      <Section>
        <Integrations data={integrations} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Features />
      </SectionAlternate>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews data={reviews} />
      </SectionAlternate>
      <Divider />
      <Divider />
      <Divider />
      <Divider />

    </div>
  );
};

export default IndexView;

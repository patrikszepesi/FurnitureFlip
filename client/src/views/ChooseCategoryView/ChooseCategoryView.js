
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../../components/organisms';

import {
  Categories,
} from './components';

import { categories } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const ChooseCategoryView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Categories data={categories} />
      </Section>
    </div>
  );
};

export default ChooseCategoryView;

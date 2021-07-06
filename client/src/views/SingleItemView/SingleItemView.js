import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

import {Hero} from './components';

const SingleItemView = ({ item }) => {

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '100%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));
const classes=useStyles()

  return (
    <div>
      <Hero className={classes.shape} item={item} />
    </div>
  );
};
export default SingleItemView;

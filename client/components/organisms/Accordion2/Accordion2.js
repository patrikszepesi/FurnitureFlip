/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  listItem: {
    cursor: 'pointer',
  },
}));

/**
 * Component to display accordion view
 *
 * @param {*} props
 */
const Accordion2 = props => {
  const {
    items,
    className,
    titleProps,
    subtitleProps,
    textProps,
    linkProps,
    handleSubmit,
    ...rest
  } = props;
  const classes = useStyles();




  return (
    <div {...rest} className={clsx('accordion', classes.root, className)}>
      {items.map(item => (
        <MuiAccordion
          className={clsx('accordion__item-wrapper', classes.listItem)}
          key={item.id}
        >
          <MuiAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={item.id}
          >
            <Grid
              container
              spacing={0}
              className="accorion__item-text-container"
            >
              <Grid item xs={12} className="accorion__item-title-container">
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className="accorion_item-title"
                  {...titleProps}
                >
                 Név:   {item.billingNameUser} <br/>
                 Email címe:{item.email} <br/>
                 Számlázási címe: {item.billingAddress}<br/>
                 Eladott termék: {item.name} |  Ára:{item.price} Forint<br/>
                 Azonosító: {item._id}<br/>
                 Vásárlás dátum: {item.purchaseDate}<br/>

                </Typography>
              </Grid>
            </Grid>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <Grid
              container
              spacing={2}
              className="accordion__collapsable-text-container"
            >
              <Grid
                item
                xs={12}
                className="accordion__collapsable-text-wrapper"
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className="accordion__collapsable-text"
                  {...textProps}
                >
                <Button onClick={()=>handleSubmit(item._id)}  color="primary" variant="outlined" size="large">
                  Számla leadva
                </Button>
                </Typography>
              </Grid>
            </Grid>
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};
Accordion2.defaultProps = {
  titleProps: {},
  subtitleProps: {},
  textProps: {},
  linkProps: {},
};


export default Accordion2;

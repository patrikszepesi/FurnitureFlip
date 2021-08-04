import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AdminRoute from "../../../../../components/routes/AdminRoute";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { IconAlternate } from '../../../../../components/molecules';
import { Accordion2 } from '../../../../../components/organisms';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  accordionGrid: {
    '& .accordion__item-wrapper': {
      boxShadow: '0 1.5rem 4rem rgba(22,28,45,.05)',
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontWeight300: {
    fontWeight: 300,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  listItemText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.light,
    color: 'white',
    fontWeight: 700,
  },
}));

const Questions = props => {
  const {  className, ...rest } = props;
  const classes = useStyles();

  const [invoices, setInvocies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dummy, setDummy] = useState(0);


  const handleSubmit=async (itemId) => {

    try {
      const { data } = await axios.put(`/api/invoice-completed/`, {
        itemId
      });
      setDummy(dummy+1)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadInvoices();
  }, [dummy]);

  const loadInvoices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/load-invocies");
      setInvocies(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };


  return (
    <AdminRoute>
    <div className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            <ListItem disableGutters>
              <ListItemText
                primary="Számlák"
                primaryTypographyProps={{
                  variant: 'h6',
                }}
                secondaryTypographyProps={{
                  variant: 'h6',
                }}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                className={classes.listItemText}
                secondary={`${invoices.length} Számla összesen`}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textSecondary',
                }}
                secondaryTypographyProps={{
                  variant: 'body1',
                  className: classes.answerCount,
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.accordionGrid}>

          <Accordion2
          handleSubmit={handleSubmit}
            items={invoices}
            titleProps={{
              variant: 'subtitle1',
              className: classes.fontWeightBold,
            }}
            subtitleProps={{
              className: classes.fontWeightBold,
            }}
          />
        </Grid>
      </Grid>
    </div>
    </AdminRoute>
  );
};


export default Questions;

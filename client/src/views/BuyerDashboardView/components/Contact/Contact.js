import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { colors, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';
import { useRouter } from "next/router";


const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
  },
  listItem: {
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${colors.grey[200]}`,
    '&:last-child': {
      borderBottom: 0,
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      borderRight: `1px solid ${colors.grey[200]}`,
      borderBottom: 0,
      '&:last-child': {
        borderRight: 0,
      },
    },
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const Contact = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const router = useRouter();


  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (

    <div className={className} {...rest}>
    <Button onClick={()=>router.push("/history")} variant="outlined" color="primary" size="large">
      Vásárlásaim részletesen
    </Button>
      <SectionHeader
        title="Valami Probléma történt?"
        subtitle="Írj nekünk és megoldjuk a problémádat."
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <List disablePadding className={classes.list}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemText
            className={classes.listItemText}
            primary="Telefon"
            secondary="06302264860"
            primaryTypographyProps={{
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="support@flipit.store"
            primaryTypographyProps={{
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;

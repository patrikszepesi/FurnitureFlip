import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
} from '@material-ui/core';
import { Image } from '../../../components/atoms';
import { SectionAlternate } from '../../../components/organisms';
import { SectionHeader, IconAlternate } from '../../../components/molecules';
import nature from '../../../public/assets/nature2.svg'
import money from '../../../public/assets/money.svg'



const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(-2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

const WhatView = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const items= [
      {
        icon: 'fas fa-sign-in-alt',
        title: 'Regisztrálj',
        subtitle:
          'Csupán add meg az email címed és a nevedet',
      },
      {
        icon: 'fas fa-money-check-alt',
        title: 'Adatok megadása',
        subtitle:
          'Adj meg egy pár fontos adatot nekünk, beleértve azt a bankszámlaszámot ahová szeretnéd, hogy érkezzen a pénz a terméked eladása után. Az adataidat biztonságosan fogjuk elmenteni a Stripe segítségével. Cégek amelyek szintén a Stripe-ot használják a biztonságos pénzügy tranzakciók lebonyolításához: Google, Amazon, Shopify, Udemy, Lyft és persze mi',
      },
      {
        icon: 'fas fa-hand-holding-usd',
        title: 'Adj el bármit',
        subtitle:
          'Kínálj fel annyi terméket eladásra amennyit csak szeretnél. Az eladás után 7 nap múlva fog megérkezni hozzád a pénz. Ez a vevők biztonságát szolgálja'
      },
      {
        icon: 'fas fa-exchange-alt',
        title: 'Termék átadás',
        subtitle:
          'Emailben értesítünk téged a vevő elérhetőségeivel, amint valaki megvette és már kifizette valamelyik terméked. Utána lépj kapcsolatba a vevővel és beszéljétek meg, hogy a terméket hol tudja átvenni ',
      },
    ]

  return (
  <SectionAlternate>
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src={money}
                alt="..."
                className={classes.coverImage}
                lazy={false}
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="Hogyan működik, Eladóknak"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                      Iratkozz  fel 10 perc alatt,biztonságosan,
                    </Typography>{' '}
                    és adj el bármit
                  </span>
                }
                subtitle="Nincs havi díj, kiemelési díj, és egyéb rejtett költség. Minden eladás után, az eladott termék 10%-át számoljuk fel jutalékként"
                align="left"
                disableGutter
              />
              <List disablePadding>
                {items.map((item, index) => (
                  <ListItem key={index} disableGutters data-aos="fade-up">
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="small"
                        fontIconClass={item.icon}
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
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
              <SectionHeader
                label="Zero Waste"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">Törekszünk arra,</Typography>{' '}
                  hogy minél több dolgot tudjunk újrahasznosítani
                  </span>
                }
                subtitle="Lehet, hogy pont nálad van az könyv amit éppen valaki keres. Ha eladod még pénzt is kapsz érte. és a környezetet is óvod egyben"
                align="left"
                disableGutter
              />
              <List disablePadding>
              </List>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src={nature}
                alt="..."
                className={classes.coverImage}
                lazy={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </SectionAlternate>
  );
};

WhatView.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default WhatView;

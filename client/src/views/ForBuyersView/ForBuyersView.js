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
import money from '../../../public/assets/undraw_Successful_purchase_re_mpig.svg'



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

const ForBuyersView = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const items= [
      {
        icon: 'fas fa-user-check',
        title: 'Ellenőrzött eladók',
        subtitle:
          'Az összes eladó ellenőrzött, ami azt jelenti, hogy a személyazonosságát megerősítette.',
      },
      {
        icon: 'fas fa-user-shield',
        title: ' Biztonság',
        subtitle:
          'Miután megveszel egy terméket, az eladó nem azonnal kapja meg a pénzt, tehát nem tud átverni téged hamis termékkel. Ha valami nincs rendben csak szólj nekünk. A vásárlás után az eladó kapcsolatba lép veled, hogy hol és mikor tudod átvenni a terméket.',
      },
      {
        icon: 'fas fa-leaf',
        title: 'Zero Waste',
        subtitle:
          'A bevételünk 5%-át különböző zöld projektekre használjuk majd fel',
      },
      {
        icon: 'fas fa-times-circle',
        title: 'Nincsenek extra költségek',
        subtitle:
          'Nincs felesleges kiemelési díj, havi díj vagy egyéb rejtett költség. Az eladási ár 10%-át kérjük el jutalékként',
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
                label="Hogyan működik, Vevőknek"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">
                    Vásárolj biztonságosan
                    </Typography>{' '}
                    és olcsón.
                  </span>
                }
                subtitle=" Miért velünk?"
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
                subtitle="Lehet, hogy pont nálad van az könyv amit éppen valaki keres. Ha eladod még pénzt is kapsz érte, és a környezetet is óvod egyben"
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

ForBuyersView.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default ForBuyersView;

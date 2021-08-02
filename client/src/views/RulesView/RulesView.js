import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from '../../../components/molecules';
import { Section, CardBase } from '../../../components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: '#7ed957',
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const RulesView = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
        <DescriptionCta
          title="Általános Szerződési Feltételek"
          subtitle="Frissítve  07.13.2021"
          align={'left'}
          titleProps={{
            className: classes.fontWeightBold,
            color: 'textPrimary',
          }}
          subtitleProps={{
            color: 'textSecondary',
          }}
        />
        <Divider className={classes.divider} />
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <SectionHeader
              title="Általános"
              subtitle="Az alábbi szerződési feltételek a www.flipit.store vásárlóira, eladóira és az oldal szolgáltatásait igénybevevő felhasználókra vonatkoznak."
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
            />
            <SectionHeader
              title="Bevezető"
              subtitle="Az ÁÜTŐ Kft. fenntartja magának a jogot jelen tájékoztató bármikori megváltoztatására. Természetesen az esetleges változásokról kellő időben értesíti közönségét. A regisztrálással a felhasználó elfogadja a honlap által biztosított ÁSZF-et.
"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Amennyiben felhasználónknak olyan kérdése lenne, mely jelen közleményünk alapján nem egyértelmű, kérjük írja meg nekünk, és kollégánk megválaszolja kérdését. Az ÁÜTŐ Kft. bár elkötelezett a szolgáltatások minőségének a legmagasabb szinten tartása irányában, a rendszer használatából eredő esetleges károkért felelősséget nem vállal.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                Az ÁÜTŐ Kft. elkötelezett partnerei és felhasználói személyes adatainak védelmében, kiemelten fontosnak tartja ügyfelei információs önrendelkezési jogának tiszteletben tartását. Az ÁÜTŐ Kft. a személyes adatokat bizalmasan kezeli, és megtesz minden olyan biztonsági, technikai és szervezési intézkedést, mely az adatok biztonságát garantálja(hashelés)
                  .
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Az ÁÜTŐ Kft. partnere a biztonságos fizetések érdekében a Stripe   <a href="https://www.stripe.com" className={classes.link}>
                      https://www.stripe.com
                    </a>{' '}. Minden olyan adat ami a fizetéssel kapcsolatos, bankszámlaszám, CVC kód, bankkártya szám, és egyéb személyes adatokat a Stripe ellenőrzi. A Stripe jelen állás szerint PCI Service Provider Level 1-es besorolásba kategorizálható amelynél nincsen jobb kategória a biztonság terén. Mind tranzakció ,mind adattárolás terén.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  A kifizetéseket kizárólag a Stripe végzi, heti szinten. Az átutalt összegeket nem az ÁÜTŐ Kft. dolgozza fel. Az iratokat amelyeket a Stripe kér el a felhasználóktól, nem kerülnek mentésre a mi adatbázisainkban
                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="Reklamáció"
              subtitle="Felelősséget nem tud vállalni az ÁÜTŐ Kft. a felrakott termékekre viszont, ha az átverés/csalás gyanuja merül fel akkor az eladót kitiltjuk a platformról. A pénz visszajuttatása abban az esetben lehetséges, ha a Stripe még nem utalta ki a pénzt az eladónak"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                   Fontos megjegyezni, hogy minden eladónak kötelessége igazoni önmagát igazolvánnyal, valamint a lakcímkártyával
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                Reklamáció esetén sem tudjuk biztosítani a pénz visszautasítását, csak néhány esetben ami már le lett írva
                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="További tudnivalók"
              subtitle="Az ÁÜTŐ Kft. által üzemeltetett honlapok kódjai az ÁÜTŐ Kft.-től független, külső szerverről érkező és külső szerverre mutató hivatkozásokat is tartalmaznak.
                Az egyik ilyen külső szerver segíti a honlap látogatottsági és egyéb webanalitikai adatainak független auditálását (Google Analytics)."
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                Az eladókat képesek vagyunk ellenőrizni hiszen megadják a személyes adataikat viszont a terméküket nem tudjuk ezért is nem vállallunk a termékek után bármilyen felelősséget.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                Számlát az eladó az ÁÜTŐ Kft.-től fog kapni arról, hogy 10% jutalékot levontak az eladott áru értékéből. Ezen felül a vevő emailben fog kapni egy visszaigazolást a vásárlásáról.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Az oldal nem használ sütiket, hanem CSFR token-eket használ ami biztosítja, hogy a felhasználó be tudjon lépni és azonosítani tudja önmagát. A token nem ment el semmilyen személyes adatot, és használata nélkül a felhasználó képtelen bejelntekzni és használni az oldalt. A regisztrálással a felhasználó elfogadja, hogy CSFR tokennel fog tudni bejelentkezni.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                A regisztrációval a felhasználó beleegyezik, hogy, ha el akar adni valamit akkor utána a Stripe segítségével tudja nyomon követni a számlájára érkező összegeket.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                A regisztrációval a felhasználó beleegyezik, hogy adatait biztonságosan, hashelve elmentjük egy adatbázisba
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                A regisztrációval a felhasználó beleegyezik, hogy nem fog szándékosan hamis termékleírást adni, ha mégis akkor akár büntethető is.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                A regisztrációkor megadott adatok a hatályos adatvédelmi rendelkezések alapján lesznek kezelve, a személyes adatok tiszteletben tartásával. Az adatokat nem adjuk ki másik félnek!  </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                A regisztrációval a felhasználó beleegyezik, hogy olyan elérhetőséget ad meg amin könnyen elérhető. Amennyiben nem teljesíti kötelességeit akár jogi per is indulhat ellene. A kötelességekhez tartozik az, hogy, ha valki megvesz tőle egy terméket akkor azt átadja megadott időben és nem kér el semmilyen más költséget. Valamint az is, hogy semmi féle
                 képen nem próbálja meg átverni a vevőt.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  A regisztrációval a felhasználó beleegyezik, hogy, ha terméket vásáról akkor utána semmilyen módon nem próbálja átverni a vevőt.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                Csere esetén az eladónak és vevőnek kell eggyeztetnie, az ÁÜTŐ Kft. semmilyen felelősséget nem vállal ezen a téren
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Az ÁÜTŐ Kft. az informatikai környezetünket rendszeresen biztonsági teszteléssel vizsgálja, a talált hibákat vagy gyenge pontokat kijavítja, az informatikai rendszer biztonsági megerősítését folyamatos feladatnak tekinti.                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={isMd ? 4 : 2} direction="column">
              <Grid item xs={12}>
                <CardBase withShadow className={classes.cardHighlighted}>
                  <SectionHeader
                    title="Kérdésed van?"
                    subtitle="Írj nekünk bármikor, itt:"
                    ctaGroup={[<Button variant="contained"><a class="mailto" href="mailto:support.flipit.store">support@flipit.store</a></Button>]}
                    disableGutter
                    align="left"
                    titleProps={{
                      variant: 'subtitle1',
                      className: clsx(
                        classes.textWhite,
                        classes.fontWeightBold,
                      ),
                    }}
                    subtitleProps={{
                      variant: 'body2',
                      className: classes.textWhite,
                    }}
                  />
                </CardBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </>
      </Section>
      <Divider />
    </div>
  );
};

export default RulesView;

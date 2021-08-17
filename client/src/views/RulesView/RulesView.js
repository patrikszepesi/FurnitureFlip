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
          title="Általános Szerződési Feltételek és Adatkezelési tájékoztató"
          subtitle="Frissítve  08.17.2021"
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
              subtitle="Az alábbi szerződéses feltételek a www.flipit.store felhasználóira és az oldal szolgáltatásait igénybe vevő felhasználókra vonatkoznak. Társaságunk üzleti célja a honlap üzemeltetéssel kapcsolatban az, hogy hatékony kapcsolatfelvételt és adás-vételi ügyletek lebonyolítását segítse elő a regisztrált felhasználók részére, biztonságosan és ellenőrzött körülmények között. Vállaljuk a felek által lebonyolítani szándékozott ügyletekhez kapcsolódó fizetések ellenőrzött és a legmagasabb biztonsági fokozatú rendszeren keresztül történő lebonyolítását, amelyhez a Stripe https://www.stripe.com szolgáltatót vonjuk be. A Stripe a biztonságos fizetési forgalom lebonyolításra szakosodott általunk igénybe vett szolgáltató."
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
              subtitle="Az ÁÜTŐ Kft. fenntartja magának a jogot, hogy a jelen ÁSZF-t bármikor, egyoldalúan megváltoztassa. Az esetleges változáskról társaságunk megfelelő időben értesíti a regisztrált felhasználókat. A regisztrálással a felhasználó elfogadja az ÁSZF-et és hozzájárul az adatainak kezeléséhez is."
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
                	Amennyiben a felhasználónak olyan kérdése lenne, mely jelen ÁSZF alapján nem egyértelmű, kérjük írja meg és legjobb tudásunk szerint felvilágosítást adunk. Társaságunk elkötelezett a szolgáltatások minőségének legmagasabb szinten történő lebonyolításáért, azonban a rendszer használatából eredő esetleges károkért felelősséget nem vállal.                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
     	            A felhasználók személyes adatainak védelmét az ÁÜTŐ Kft. kiemelten kezeli és fontosnak tartja ügyfelei információs önrendelkezési jogának tiszteletben tartását.. Társaságunk a személyes adatokat bizalmasan kezeli, és megtesz minden olyan biztonsági, technikai és szervezési intézkedést, mely az adatok maximális biztonságát garantálja.                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">

                A fizetési forgalom biztonságos lebonyolításában az ÁÜTŐ Kft. partnere a Stripe <a href="https://www.stripe.com" className={classes.link}>
                    https://www.stripe.com
                  </a>. Minden olyan adat, információ, ami az ellenérték kiegyenlítésével, a pénzügyi elszámolások lebonyolításával kapcsolatos, például a bankszámlaszám, CVC kód, bankkártya szám, és egyéb személyes adat a biztonság központjában áll. Ezeket a kiemelt adatokat a Stripe ellenőrzi, aki biztonságtechnikai besorolása alapján PCI Service Provider Level 1. Ez  a legmagasabb fokú biztonsági besorolás a garancia arra, hogy mind az eladó, mind a vevő maximális biztonságot élvezzen.
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
	                 A gyakorlatban ez azt jelenti, hogy mind a vevő, mind az eladó adatainak ellenőrzését, valamint a tranzakció azonosítását a Stripe elvégzi. Az átutalt összegek először a Stripe-hoz kerülnek, aki ezek után lebonyolítja az elszámolást az eladóval és a honlap üzemeltetővel.  Az ellenőrzéshez szükséges dokumentumok - melyeket a Stripe kér el a felhasználóktól -  nem kerülnek mentésre a mi adatbázisainkban. Bármilyen jogellenes cselekmény, amely akár megtévesztéssel, akár hamis információval, vagy bármely más általunk nem ellenőrizhető módon kárt okoz a felhasználóknak,  az ÁÜTŐ Kft. felelősséget nem vállal, de a szükséges  jogi lépéseket saját döntése alapján megteszi. Felveszi a kapcsolatot a Stripe-al és egyéb szervezetekkel, hogy a károkozót felelősségre vonja és kizárja a további rendszerhasználatból.                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="Reklamáció"
              subtitle="Felelősséget nem tud vállalni az ÁÜTŐ Kft. a felrakott termékekre. Viszont, ha az átverés/csalás gyanuja merül fel akkor az eladót kitiltjuk a platformról. A pénz visszajuttatása abban az esetben lehetséges, ha a Stripe még nem utalta ki a pénzt az eladónak"
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
	                 Az ÁÜTŐ Kft. az eladásra felkínált termékekért, azok minőségi és egyéb paramétereiért felelősséget nem tud vállalni. A legkisebb etikai vétség vagy jogellenes cselekmények elkövetése  esetén, például csalás, megtévesztés, hamis adatközlés, vétkes felet kitiltjuk a platformról.                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
	               Pénz visszajuttatása kizárólag abban az esetben lehetséges, ha a Stripe még nem utalta ki az ellenértéket.
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
                  Minden eladónak kötelessége igazolnia önmagát igazolvánnyal és valamilyen tartózkodási igazolvánnyal.
               </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="További tudnivalók"
              subtitle="Az ÁÜTŐ Kft. által üzemeltetett honlapok kódjai az ÁÜTŐ Kft.-től független, külső szerverről érkező és külső szerverre mutató hivatkozásokat is tartalmaznak. Az egyik ilyen külső szerver segíti a honlap látogatottsági és egyéb webanalitikai adatainak független auditálását (Google Analytics)."
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
 	                Az eladókat személyes adataikon keresztül ellenőrizzük, azonban a termékeiket nem ismerjük, így ezekért nem is nem vállalunk felelősséget.                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                	Az ÁÜTŐ Kft.-től az eladási ár 10%-a + 27% ÁFA  összegről az eladó számlát fog kapni. Ez az összeg a honlap működtetőjének bevétele. Ezen felül a vevő emailben egy visszaigazolást fog kapni a vásárlásáról.
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
                	A regisztrációval a felhasználó beleegyezik abba, hogy értékesítés esetén a Stripe szolgáltató segítségével tudja nyomon követni számlájára érkező összegeket.
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
                A regisztrációval a felhasználó beleegyezik, hogy adatait biztonságosan, hashelve elmentjük egy adatbázisba.
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
                	A regisztrációval a felhasználó beleegyezik, hogy nem fog szándékosan hamis, félrevezető termékleírást adni, aminek megsértése súlyos következményekkel jár.
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
                A regisztrációkor megadott adatok a hatályos adatvédelmi rendelkezések alapján kerülnek kezelésre,  személyes adatok védelmének tiszteletben tartásával. Az adatokat nem adjuk ki harmadik feleknek.
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
                  	A regisztrációval a felhasználó beleegyezik, hogy olyan elérhetőséget ad meg, ami valós és rajta keresztül könnyen elérhető. Amennyiben a felhasználó jogellenes magatartással kárt okoz, nem teljesíti a vállalt kötelezettségeit, vagy egyéb módon törvényt sért, az jogi következményekkel jár. Az eladó vállalja, hogy a termék értékesítése során a vételáron felül semmilyen egyéb jogcímen nem követelhet kiegészítő fizetéseket, például csomagolás, tárolás, stb. Az eladó legalapvetőbb kötelezettsége a tisztességes vevőtájékoztatás és információ átadás a felkínált termékről.
                </Typography>
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
                    ctaGroup={[<Button variant="contained"><a class="mailto" href="mailto:support@flipit.store">support@flipit.store</a></Button>]}
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
              <Grid item xs={12}>
                <CardBase withShadow className={classes.cardHighlighted}>
                  <SectionHeader
                    title="ÁÜTŐ Kft. adatai"
                    subtitle="Cím: 1222 Budapest Görög utca 14"
                    ctaGroup={["Adószám: 12285596243", "Cégjegyzékszám: 01 09 662999"]}
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
        <SectionHeader
          title="Adatkezelési Tájékoztató"
          subtitle="Az adatkezelési tájékoztató célja
Az ÁÜTŐ Kft. mint adatkezelő, magára nézve kötelezőnek ismeri el jelen jogi közlemény tartalmát. Kötelezettséget vállal arra, hogy tevékenységével kapcsolatos minden adatkezelés megfelel a jelen szabályzatban és a hatályos nemzeti jogszabályokban, valamint az Európai Unió jogi aktusaiban meghatározott elvárásoknak.
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
        <ListItem disableGutters>
          <ListItemAvatar>
            <Avatar
              src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
              className={classes.checkBox}
            />
          </ListItemAvatar>
          <Typography variant="body1" color="textPrimary">
          Az Adatkezelő fenntartja magának a jogot jelen tájékoztató bármikori megváltoztatására. Természetesen az esetleges változásokról kellő időben értesíti közönségét.
          Amennyiben kérdése lenne jelen közleményünkhöz kapcsolódóan, kérjük, írja meg nekünk, és kollégánk megválaszolja kérdését.
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
          Az Adatkezelő elkötelezett ügyfelei és partnerei személyes adatainak védelmében, kiemelten fontosnak tartja ügyfelei információs önrendelkezési jogának tiszteletben tartását. Az Adatkezelő a személyes adatokat bizalmasan kezeli, és megtesz minden olyan biztonsági, technikai és szervezési intézkedést, mely az adatok biztonságát garantálja.
          Az Adatkezelő az alábbiakban ismerteti adatkezelési gyakorlatát.
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
          Az Adatkezelő fenntartja magának a jogot jelen tájékoztató bármikori megváltoztatására. Természetesen az esetleges változásokról kellő időben értesíti közönségét.
          Amennyiben kérdése lenne jelen közleményünkhöz kapcsolódóan, kérjük, írja meg nekünk, és kollégánk megválaszolja kérdését.
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
          Az adatkezelő adatai
Amennyiben megkeresné Társaságunkat, support@flipit.store és 06302264860 elérhetőségeken léphet kapcsolatba az adatkezelővel.

Név: ÁÜTŐ Kft.
 Székhely: 1221 Budapest, Görög utca 14
 Cégjegyzékszám:01 09 662999
 Adószám:12285596243
 E-mail: support@flipit.store
Adatvédelmi tisztviselő
 Név: Szepesi Patrik
 Telefonszám:06302264860

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
          A kezelt személyes adatok köre
    Regisztrációs során megadandó személyes adatok:

    Név, e-mail cím, jelszó
    (A rendszer a jelszót automatikusan titkosítja )

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
          A kezelt személyes adatok köre
          abban az esetben, ha a felhasználó eladni kíván egy terméket:

          Név, e-mail cím, telefonszám, cím, valamint az eladásra kínált tárgy adatai
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
          Technikai adatok
          Az Adatkezelő a személyes adatok kezeléséhez a szolgáltatás nyújtása során alkalmazott informatikai eszközöket úgy választja meg és üzemelteti, hogy a kezelt adat:
          	az arra feljogosítottak számára hozzáférhető (rendelkezésre állás);
          	hitelessége és hitelesítése biztosított (adatkezelés hitelessége);
          	változatlansága igazolható (adatintegritás);
          	a jogosulatlan hozzáférés ellen védett (adat bizalmassága) legyen.

          Az Adatkezelő az adatokat megfelelő intézkedésekkel védi a jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés vagy megsemmisítés, valamint a véletlen megsemmisülés ellen.
          Az Adatkezelő olyan műszaki, szervezési és szervezeti intézkedésekkel gondoskodik az adatkezelés biztonságának védelméről, amely az adatkezeléssel kapcsolatban jelentkező kockázatoknak megfelelő védelmi szintet nyújt.
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
          Az Adatkezelő az adatkezelés során megőrzi:
          a titkosságot: megvédi az információt, hogy csak az férhessen hozzá, aki erre jogosult;
          a sértetlenséget: megvédi az információnak és a feldolgozás módszerének a pontosságát és teljességét;
          a rendelkezésre állást: gondoskodik arról, hogy amikor a jogosult használónak szüksége van rá, valóban hozzá tudjon férni a kívánt információhoz, és rendelkezésre álljanak az ezzel kapcsolatos eszközök.

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
          Az adatkezelés célja, módja és jogalapja:

          Általános adatkezelési irányelvek
          Az Adatkezelő tevékenységének adatkezelései önkéntes hozzájáruláson, illetve törvényi felhatalmazáson alapulnak. Az önkéntes hozzájáruláson alapuló adatkezelések esetében az érintettek e hozzájárulásukat az adatkezelés bármely szakában visszavonhatják.

          Bizonyos esetekben a megadott adatok egy körének kezelését, tárolását, továbbítását jogszabályok teszik kötelezővé, melyről külön értesítjük ügyfeleinket.

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
          Felhívjuk az Adatkezelő részére adatközlők figyelmét, hogy amennyiben nem saját személyes adataikat adják meg, az adatközlő kötelessége az érintett hozzájárulásának beszerzése.
          Adatkezelési alapelvei összhangban vannak az adatvédelemmel kapcsolatos hatályos jogszabályokkal, így különösen az alábbiakkal:
          	2011. évi CXII. törvény - az információs önrendelkezési jogról és az információ-szabadságról (Infotv.);

          	Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (2016. április 27.) – a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet, GDPR);
          	2013. évi V. törvény – a Polgári Törvénykönyvről (Ptk.);
          	2000. évi C. törvény – a számvitelről (Számv. tv.);
          	2017. évi LIII. törvény – a pénzmosás és terrorizmus finanszírozása megelőzéséről és megakadályozásáról (Pmt.);
          	2013. évi CCXXXVII. törvény – a hitelintézetekről és a pénzügyi vállalkozásokról (Hpt.).

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
          Adatfeldogozás, az adatokat megismerők köre:

          Érintett jogai és jogérvényesítési lehetőségei
          Az adatkezelés időtartamán belül Önt a Rendelet előírásai szerint az alábbi jogok illetik meg:
          a hozzájárulás visszavonásának joga
          	személyes adatokhoz és az adatkezeléssel kapcsolatos információkhoz való hozzáférés
          	helyesbítéshez való jog
          	adatkezelés korlátozása,
          	törléshez való jog
          	tiltakozáshoz való jog
          	hordozhatósághoz való jog.

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
Amennyiben Ön jogaival élni kíván, az az Ön azonosításával jár együtt, valamint az Adatkezelőnek Önnel szükségszeren kommunikálnia kell. Ezért az azonosítás érdekében személyes adatok megadására lesz szükség (de az azonosítás csak olyan adaton alapulhat, amelyet Adatkezelő egyébként is kezel Önről), valamint az Adatkezelő email fiókjában elérhetőek lesz az Ön adatkezeléssel kapcsolatos panasza a jelen tájékoztatóban, a panaszokkal kapcsolatban megjelölt időtartamon belül. Az adatkezeléssel kapcsolatos panaszokat legkésőbb 30 napon belül válaszolja meg Adatkezelő.
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
          Tájékoztatáshoz való jog:
          Az Adatkezelő megfelelő intézkedéseket hoz annak érdekében, hogy az érintettek részére a személyes adatok kezelésére vonatkozó, a GDPR 13. és a 14. cikkben említett valamennyi információt és a 15–22. és 34. cikk szerinti minden egyes tájékoztatást tömör, átlátható, érthető és könnyen hozzáférhető formában, világosan és közérthetően megfogalmazva nyújtsa.

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
          Az érintett hozzáféréshez való joga
          Ön jogosult arra, hogy az Adatkezelőtől visszajelzést kapjon arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha adatkezelés folyamatban van, jogosult arra, hogy:
          	a kezelt személyes adatokhoz hozzáférést kapjon és
          	a következő információkról az Adatkezelő tájékoztassa:
          	az adatkezelés céljai;
          	az Önről kezelt személyes adatok kategóriái;
          	információ azon címzettekről vagy címzettek kategóriáiról, akikkel, illetve amelyekkel a személyes adatokat Adatkezelő közölte vagy közölni fogja;
          	a személyes adatok tárolásának tervezett időtartama, vagy ha ez nem lehetséges, ezen időtartam meghatározásának szempontjai;
          	az Ön azon joga, hogy kérelmezheti az Adatkezelőtől az Önre vonatkozó személyes adatok helyesbítését, törlését vagy kezelésének korlátozását, és jogos érdeken alapuló adatkezelés esetén tiltakozhat az ilyen személyes adatok kezelése ellen;
          	a felügyeleti hatósághoz címzett panasz benyújtásának joga;
          	ha az adatokat nem Öntől gyűjtötték be, a forrásukra vonatkozó minden elérhető információ;
          	az automatizált döntéshozatal tényéről (ha alkalmazott ilyen eljárás), ideértve a profilalkotást is, valamint legalább ezekben az esetekben az alkalmazott logikára és arra vonatkozóan érthető információkat, hogy az ilyen adatkezelés milyen jelentőséggel, és Önre nézve milyen várható következményekkel bír.

          A jog gyakorlásának célja az adatkezelés jogszerűségének megállapítására és ellenőrzésére irányulhat, ezért többszöri tájékoztatás kérés esetén Adatkezelő méltányos költségtérítést számolhat fel a tájékoztatás teljesítéséért cserébe.

          Kérjük, hogy kérelmében jelölje meg, hogy a személyes adatokhoz kér hozzáférést, vagy az adatkezeléssel kapcsolatos információkat kéri.


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
          Helyesbítés joga:
          Ön jogosult arra, hogy kérésére Adatkezelő késedelem nélkül helyesbítse az Önre vonatkozó pontatlan személyes adatokat.

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
          Törléshez való jog:
          Az érintett az alábbi indokok valamelyikének fennállása esetén jogosult arra, hogy kérésére az Adatkezelő indokolatlan késedelem nélkül törölje a rá vonatkozó személyes adatokat:
          	személyes adatokra már nincs szükség abból a célból, amelyből azokat gyűjtötték vagy más módon kezelték;
          	az érintett visszavonja az adatkezelés alapját képező hozzájárulását, és az adatkezelésnek nincs más jogalapja;
          	az érintett tiltakozik az adatkezelés ellen, és nincs elsőbbséget élvező jogszerű ok az adatkezelésre;
          	a személyes adatokat jogellenesen kezelték;
          	a személyes adatokat az adatkezelőre alkalmazandó uniós vagy tagállami jogban előírt jogi kötelezettség teljesítéséhez törölni kell;


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
          Az adatkezelés korlátozásához való jog
          Az érintett kérésére az Adatkezelő korlátozza az adatkezelést, ha az alábbi feltételek valamelyike teljesül:
          	az érintett vitatja a személyes adatok pontosságát, ez esetben a korlátozás arra az időtartamra
          	vonatkozik, amely lehetővé teszi, a személyes adatok pontosságának ellenőrzését;
          	az adatkezelés jogellenes, és az érintett ellenzi az adatok törlését, és ehelyett kéri azok felhasználásának korlátozását;
          	az adatkezelőnek már nincs szüksége a személyes adatokra adatkezelés céljából, de az érintett igényli azokat jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez; vagy
          	az érintett tiltakozott az adatkezelés ellen; ez esetben a korlátozás arra az időtartamra vonatkozik, amíg megállapításra nem kerül, hogy az adatkezelő jogos indokai elsőbbséget élveznek-e az érintett jogos indokaival szemben.

          Ha az adatkezelés korlátozás alá esik, a személyes adatokat a tárolás kivételével csak az érintett hozzájárulásával, vagy jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy más természetes vagy jogi személy jogainak védelme érdekében, vagy az Unió, illetve valamely tagállam fontos közérdekéből lehet kezelni.

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
          Visszavonás joga:
          Az érintett jogosult arra, hogy hozzájárulását bármikor visszavonja.

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
          Bírósághoz fordulás joga:
          Az érintett a jogainak megsértése esetén az adatkezelő ellen bírósághoz fordulhat. A bíróság az ügyben soron kívül jár el.

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
          Egyéb rendelkezések:
          E tájékoztatóban fel nem sorolt adatkezelésekről az adat felvételekor adunk tájékoztatást.
          Tájékoztatjuk ügyfeleinket, hogy a bíróság, az ügyész, a nyomozó hatóság, a szabálysértési hatóság, a közigazgatási hatóság, a Nemzeti Adatvédelmi és Információszabadság Hatóság, a Magyar Nemzeti Bank, illetőleg jogszabály felhatalmazása alapján más szervek tájékoztatás adása, adatok közlése, átadása, illetőleg iratok rendelkezésre bocsátása végett megkereshetik az adatkezelőt.

          Az Adatkezelő a hatóságok részére – amennyiben a hatóság a pontos célt és az adatok körét megjelölte – személyes adatot csak annyit és olyan mértékben ad ki, amely a megkeresés céljának megvalósításához elengedhetetlenül szükséges.


          A jelen dokumentum a FlipIt működésével kapcsolatban minden releváns adatkezelési információt tartalmaz az Európai Unió 2016/679 számú Általános Adatvédelmi Rendelete (a továbbiakban: Rendelet. GDPR) és a 2011. évi CXII. tv. (a továbbiakban: Infotv.) alapján.

          </Typography>
        </ListItem>
        </>
      </Section>
      <Divider />
    </div>
  );
};

export default RulesView;

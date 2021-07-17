import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputAdornment,
  useMediaQuery,
  Grid,
  Typography,
  Button,
  NoSsr,
  colors,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';


import { Section, CardBase } from '../../components/organisms';
import { SectionHeader } from '../../components/molecules';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);



const useStyles = makeStyles(theme => ({

  hero: {
    background: theme.palette.alternate.dark,
  },
  heroWrapper: {
    position: 'relative',
  },
  heroImageContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    background:
      'url(https://assets.maccarianagency.com/the-front/photos/people/designer.png) no-repeat right bottom',
    backgroundSize: 'contain',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  heroGrid: {
    maxWidth: 926,
  },
  searchGrid: {
    zIndex: 3,

    height:'70%'
  },
  searchGridText: {
    maxWidth: 605,

  },
  textField: {
    width: '100%',
  },
  searchIcon: {
    color: colors.grey[600],
  },
  title: {
    fontWeight: 'bold',
  },
  search: {
    position: 'relative',
    zIndex:3,
    marginTop:-40,
    width:'70%',
    heigth:200

  }
}));

const Search = ({categoryToFilter, onFilterChange, filterObj}) => {
  const classes = useStyles();
  console.log(filterObj)

  let subCategories=[]
  let subCategory=''
  let qualities=['új','alig használt','használt']
  let prices=[]
  let items=[]
  let difficulties=[]

  if(categoryToFilter==='bútor'){
    subCategories=['benti bútor','kinti bútor','bárhol tárolható']
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='sport/szabadidő'){
    subCategories=['labdarúgás','kosárlabda','röplabda','kézilabda','küzdősport','jégkorong/korcsolya','sakk','tenisz','vízisport','túra','futás','séta','lovaglás','téli sport','golf','asztalitenisz','társasjáték','darts','snooker/biliárd'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }else if(categoryToFilter==='alkatrész'){
    subCategories=['jármű'].sort()
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='művészet'){
    subCategories=['festmény','design','szobor'].sort()
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='műszaki cikk'){
    subCategories=['telefon','számítógép/PC','tablet','laptop','zenelejátszó','TV','fényképező','konzol/videójáték','nyomtató'].sort()
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='ruha'){
    subCategories=['férfi','női','gyermek/fiú','gyermek/lány','baba/fiú','baba/lány'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }else if(categoryToFilter==='mama-baba'){
    subCategories=['játék','szállítás','bútor'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }else if(categoryToFilter==='könyv'){
    subCategories=['gyerekeknek','tankönyv','felnőtteknek'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }


  if(filterObj.subCategory==='benti bútor'){
    items=['szék','asztal','kanapé','lámpa','kád','zuhany','fotel','ágy','evőeszköz','egyéb','garnitúra','szekrény','ajtó','tégla','csempe'].sort()
  }else if(filterObj.subCategory==='kinti bútor'){
    items=['napernyő','napágy','kiülő','hintaágy','kinti-ágy','medence','jacuzzi','egyéb','ajtó','tégla','csempe'].sort()
  }else if(filterObj.subCategory==='bárhol tárolható'){
    items=['szék','asztal','kanapé','lámpa','kád','zuhany','ajtó','tégla','csempe','fotel','ágy','evőeszköz','egyéb','garnitúra','napernyő','napágy','kiülő','hintaágy','kinti-ágy','medence','jacuzzi'].sort()
  }else if(filterObj.subCategory==='labdarúgás'){
    items=['focilabda','focicipő','sipcsontvédő','melegítő','gatya','rövidujú','hosszujjú']
  }else if(filterObj.subCategory==='asztalitenisz'){
    items=['labda','ütő','pingpong asztal','háló'].sort()
  }else if(filterObj.subCategory==='darts'){
    items=['nyilak','tábla','egyéb'].sort()
  }else if(filterObj.subCategory==='futás'){
    items=['futócipő','stopper óra','ruházat','napszemüveg','egyéb','sapka'].sort()
  }else if(filterObj.subCategory==='golf'){
    items=['golfütő','golfütő szett','labda','golfcipő','egyéb'].sort()
  }else if(filterObj.subCategory==='jégkorong/korcsolya'){
    items=['korong','hokiütő','pengevédő','korcsolya','élvédő','védőruha','fogvédő','egyéb'].sort()
  }else if(filterObj.subCategory==='kosárlabda'){
    items=['kosárlabda','cipő','fogvédő','háló','palánk','egyéb'].sort()
  }else if(filterObj.subCategory==='kézilabda'){
    items=['kézilabda','wax','cipő','egyéb'].sort()
  }else if(filterObj.subCategory==='küzdősport'){
    items=['fogvédő','zsák','sipcsontvédő','szuszpenzor','box kesztyű','egyéb','zsákoló kesztyű'].sort()
  }else if(filterObj.subCategory==='lovaglás'){
    items=['védőfelszerelés','pálca','csizma','nadrág','egyéb'].sort()
  }else if(filterObj.subCategory==='röplabda'){
    items=['röplabda','háló','gatya','strandröplabda','egyéb'].sort()
  }else if(filterObj.subCategory==='snooker/biliárd'){
    items=['golyó','dákó','asztal','egyéb'].sort()
  }else if(filterObj.subCategory==='séta'){
    items=['sétabot','egyéb'].sort()
  }else if(filterObj.subCategory==='tenisz'){
    items=['teniszlabda','teniszütő','tok','háló','egyéb'].sort()
  }else if(filterObj.subCategory==='társasjáték'){
    items=['stratégia','család','logikai','egyéb','tábla','kvíz','ügyességi'].sort()
  }else if(filterObj.subCategory==='téli sport'){
    items=['síelés','snowboard','szánkó','egyéb','curling','egyéb','jégkorcsolya'].sort()
  }else if(filterObj.subCategory==='túra'){
    items=['cipő','hűtőtáska','walking stick','kemping holmi'].sort()
  }else if(filterObj.subCategory==='vízisport'){
    items=['vízilabda','úszószemüveg','úszósapka','egyéb','sup','kajak-kenu','sárkányhajó','katamarán','wakeboard','vízisí','buvárkodás'].sort()
  }else if(filterObj.subCategory==='sakk'){
    items=['sakktábla','óra','egyéb'].sort()
  }else if(filterObj.subCategory==='TV'){
    items=['LED','LCD','egyéb','OLED','QLED','projektoros'].sort()
  }else if(filterObj.subCategory==='fényképező'){
    items=['fotógép','videókamera','egyéb','fotógép kiegészítő','videókamera kiegészítő'].sort()
  }else if(filterObj.subCategory==='konzol/videójáték'){
    items=['konzol/PC játék','Xbox játék','Playstation játék','konzol/PC tartozék','Xbox/Xbox tartozék','nintendo/tartozék','Playstation/Playstation tartozék','egyéb'].sort()
  }else if(filterObj.subCategory==='laptop'){
    items=['laptop/notebook','táska','egyéb','töltő','memória','merevlemez','védőtok','állvány'].sort()
  }else if(filterObj.subCategory==='számítógép/PC'){
    items=['asztali számítógép','monitor/kijelző','egyéb'].sort()
  }else if(filterObj.subCategory==='tablet'){
    items=['töltő','védőtok','egyéb','fólia','billentyűzet','kábel/adapter'].sort()
  }else if(filterObj.subCategory==='nyomtató'){
    items=['fekete-fehér','színes'].sort()
  }else if(filterObj.subCategory==='telefon'){
    items=['mobiltelefon','várositelefon','egyéb','védőtok','védőfólia','töltő','fejhallgató/headset','akkumulátor'].sort()
  }else if(filterObj.subCategory==='zenelejátszó'){
    items=['rádió','HiFi','mikró HiFi','egyéb','füllhallgató','headset'].sort()
  }else if(filterObj.subCategory==='baba/fiú'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver'].sort()
  }else if(filterObj.subCategory==='baba/lány'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver','hajpánt','csat','hajgumi'].sort()
  }else if(filterObj.subCategory==='férfi'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver'].sort()
  }else if(filterObj.subCategory==='női'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver','hajpánt','csat','hajgumi'].sort()
  }else if(filterObj.subCategory==='gyermek/fiú'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver'].sort()
  }else if(filterObj.subCategory==='gyermek/lány'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver','hajpánt','csat','hajgumi'].sort()
  }else if(filterObj.subCategory==='felnőtteknek'){
    items=['filozófia','igaz-történt','kaland/akció','scifi','egyéb','klasszikus','romantikus','komédia','rejtély','fantasy','horror','önéletrajz','történelmi']
  }else if(filterObj.subCategory==='gyerekeknek'){
    items=['igaz-történt','kaland/akció','egyéb','mese','vicces','rejtély','fantasy','történelmi','ismeretterjesztő','képeskönyv','fejlesztő','tanulságos']
  }else if(filterObj.subCategory==='tankönyv'){
    items=['statisztika & matek','számvitel','pénzügy','jogi','nyelvi', 'mikro & makroökonómia','politika','stratégia és szervezés','marketing','gazdaságtan','informatika','egyéb','orvosi','kémia','fizika','mérnöki','biológia','erkólcs','vallási',''].sort()
  }else if(filterObj.subCategory==='szállítás'){
    items=['hordozó','babakocsi','ikerbabakocsi','gyerekülés'].sort()
  }else if(filterObj.subCategory==='játék'){
    items=['könyv','logikai játék','kisbabáknak','egyéb','társasjáték','játékszőnyeg'].sort()
  }else if(filterObj.subCategory==='bútor'){
    items=['pelenkázó','kiságy','egyéb','mózeskosár','szekrény'].sort()
  }else if(filterObj.subCategory==='jármű'){
    items=['motor','hajó','gépjármű','egyéb'].sort()
  }else if(filterObj.subCategory==='desgin'){
    items=['benti lakás kiegészítő','kerti kiegészítő','egyéb'].sort()
  }else if(filterObj.subCategory==='festmény'){
    items=['csendélet','táj','elvont','portré','egyéb','modern'].sort()
  }else if(filterObj.subCategory==='szobor'){
    items=['benti','kinti'].sort()
  }




  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

    const handleFilterChange = (event,name) => {


      const newFilterObj = { ...filterObj, [name]: event.target.value };
      console.log(newFilterObj)

        onFilterChange(newFilterObj);
    };

  return (
    <section className={classes.hero}>
    <SectionHeader
        title={
          <span>
            Válaszd ki mit keresel{' '}
            <Typography color="secondary" variant="inherit" component="span">és vedd meg egy kattintással</Typography>
          </span>
        }
        subtitle= {categoryToFilter}
        fadeUp
      />
      <Section className={classes.heroWrapper}>
        <Grid container spacing={isMd ? 6 : 4} className={classes.heroGrid}>

          <Grid item xs={12} className={classes.search}>
            <CardBase variant="outlined" withShadow liftUp>
          <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>Kategória</p>
                <Select
                value={filterObj.subCategory}
                onChange={(e) => handleFilterChange(e, 'subCategory')}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>Válassz</em>
                  </MenuItem>
                      {subCategories.map(s => {
                        return <MenuItem value={s}>{s}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>Tárgy</p>
                <Select
                value={filterObj.item}
                onChange={(e) => handleFilterChange(e, 'item')}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>előbb válassz kategóriát</em>
                  </MenuItem>
                      {items.map(d => {
                        return <MenuItem value={d}>{d}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>Ár</p>
                <Select
                value={filterObj.price}
                onChange={(e) => handleFilterChange(e, 'price')}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  </MenuItem>
                      {prices.map(p => {
                        return <MenuItem value={p.value}>{p.name}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>Minőség</p>
                <Select
                value={filterObj.quality}
                onChange={(e) => handleFilterChange(e, 'quality')}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>None</em>
                  </MenuItem>
                      {qualities.map(q => {
                        return <MenuItem value={q}>{q}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Grid>
              </Grid>
            </CardBase>
          </Grid>

        </Grid>
        <div className={classes.heroImageContainer}></div>
      </Section>
    </section>
  );
};

export default Search;

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
  let qualities=['??j','alig haszn??lt','haszn??lt']
  let prices=[]
  let items=[]
  let difficulties=[]

  if(categoryToFilter==='b??tor'){
    subCategories=['benti b??tor','kinti b??tor','b??rhol t??rolhat??']
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='sport/szabadid??'){
    subCategories=['labdar??g??s','kos??rlabda','r??plabda','k??zilabda','k??zd??sport','j??gkorong/korcsolya','sakk','tenisz','v??zisport','t??ra','fut??s','s??ta','lovagl??s','t??li sport','golf','asztalitenisz','t??rsasj??t??k','darts','snooker/bili??rd'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }else if(categoryToFilter==='alkatr??sz'){
    subCategories=['j??rm??'].sort()
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='m??v??szet'){
    subCategories=['festm??ny','design','szobor'].sort()
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='m??szaki cikk'){
    subCategories=['telefon','sz??m??t??g??p/PC','tablet','laptop','zenelej??tsz??','TV','f??nyk??pez??','konzol/vide??j??t??k','nyomtat??'].sort()
    prices=[{name:'1.000-8.000 HUF',value:[1000,8000]},{name:'8.000-20.000 HUF',value:[8000,20000]},{name:'20.000-50.000 HUF',value:[20000,50000]},{name:'50.000-100.000 HUF',value:[50000,100000]},{name:'100.000-200.000 HUF',value:[100000,200000]},{name:'200.000-350.000 HUF',value:[200000,350000]},{name:'350.000+ HUF',value:[350000,10000000000]}]
  }else if(categoryToFilter==='ruha'){
    subCategories=['f??rfi','n??i','gyermek/fi??','gyermek/l??ny','baba/fi??','baba/l??ny'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }else if(categoryToFilter==='mama-baba'){
    subCategories=['j??t??k','sz??ll??t??s','b??tor'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }else if(categoryToFilter==='k??nyv'){
    subCategories=['gyerekeknek','tank??nyv','feln??tteknek'].sort()
    prices=[{name:'1.000-2.000 HUF',value:[1000,2000]},{name:'2.000-5.000 HUF',value:[2000,5000]},{name:'5.000-10.000 HUF',value:[5000,10000]},{name:'10.000-20.000 HUF',value:[10000,20000]},{name:'20.000-30.000 HUF',value:[20000,30000]},{name:'30.000-40.000 HUF',value:[30000,40000]},{name:'40.000+ HUF',value:[40000,10000000000]}]
  }


  if(filterObj.subCategory==='benti b??tor'){
    items=['sz??k','asztal','kanap??','l??mpa','k??d','zuhany','fotel','??gy','ev??eszk??z','egy??b','garnit??ra','szekr??ny','ajt??','t??gla','csempe'].sort()
  }else if(filterObj.subCategory==='kinti b??tor'){
    items=['naperny??','nap??gy','ki??l??','hinta??gy','kinti-??gy','medence','jacuzzi','egy??b','ajt??','t??gla','csempe'].sort()
  }else if(filterObj.subCategory==='b??rhol t??rolhat??'){
    items=['sz??k','asztal','kanap??','l??mpa','k??d','zuhany','ajt??','t??gla','csempe','fotel','??gy','ev??eszk??z','egy??b','garnit??ra','naperny??','nap??gy','ki??l??','hinta??gy','kinti-??gy','medence','jacuzzi'].sort()
  }else if(filterObj.subCategory==='labdar??g??s'){
    items=['focilabda','focicip??','sipcsontv??d??','meleg??t??','gatya','r??viduj??','hosszujj??']
  }else if(filterObj.subCategory==='asztalitenisz'){
    items=['labda','??t??','pingpong asztal','h??l??'].sort()
  }else if(filterObj.subCategory==='darts'){
    items=['nyilak','t??bla','egy??b'].sort()
  }else if(filterObj.subCategory==='fut??s'){
    items=['fut??cip??','stopper ??ra','ruh??zat','napszem??veg','egy??b','sapka'].sort()
  }else if(filterObj.subCategory==='golf'){
    items=['golf??t??','golf??t?? szett','labda','golfcip??','egy??b'].sort()
  }else if(filterObj.subCategory==='j??gkorong/korcsolya'){
    items=['korong','hoki??t??','pengev??d??','korcsolya','??lv??d??','v??d??ruha','fogv??d??','egy??b'].sort()
  }else if(filterObj.subCategory==='kos??rlabda'){
    items=['kos??rlabda','cip??','fogv??d??','h??l??','pal??nk','egy??b'].sort()
  }else if(filterObj.subCategory==='k??zilabda'){
    items=['k??zilabda','wax','cip??','egy??b'].sort()
  }else if(filterObj.subCategory==='k??zd??sport'){
    items=['fogv??d??','zs??k','sipcsontv??d??','szuszpenzor','box keszty??','egy??b','zs??kol?? keszty??'].sort()
  }else if(filterObj.subCategory==='lovagl??s'){
    items=['v??d??felszerel??s','p??lca','csizma','nadr??g','egy??b'].sort()
  }else if(filterObj.subCategory==='r??plabda'){
    items=['r??plabda','h??l??','gatya','strandr??plabda','egy??b'].sort()
  }else if(filterObj.subCategory==='snooker/bili??rd'){
    items=['goly??','d??k??','asztal','egy??b'].sort()
  }else if(filterObj.subCategory==='s??ta'){
    items=['s??tabot','egy??b'].sort()
  }else if(filterObj.subCategory==='tenisz'){
    items=['teniszlabda','tenisz??t??','tok','h??l??','egy??b'].sort()
  }else if(filterObj.subCategory==='t??rsasj??t??k'){
    items=['strat??gia','csal??d','logikai','egy??b','t??bla','kv??z','??gyess??gi'].sort()
  }else if(filterObj.subCategory==='t??li sport'){
    items=['s??el??s','snowboard','sz??nk??','egy??b','curling','egy??b','j??gkorcsolya'].sort()
  }else if(filterObj.subCategory==='t??ra'){
    items=['cip??','h??t??t??ska','walking stick','kemping holmi'].sort()
  }else if(filterObj.subCategory==='v??zisport'){
    items=['v??zilabda','??sz??szem??veg','??sz??sapka','egy??b','sup','kajak-kenu','s??rk??nyhaj??','katamar??n','wakeboard','v??zis??','buv??rkod??s'].sort()
  }else if(filterObj.subCategory==='sakk'){
    items=['sakkt??bla','??ra','egy??b'].sort()
  }else if(filterObj.subCategory==='TV'){
    items=['LED','LCD','egy??b','OLED','QLED','projektoros'].sort()
  }else if(filterObj.subCategory==='f??nyk??pez??'){
    items=['fot??g??p','vide??kamera','egy??b','fot??g??p kieg??sz??t??','vide??kamera kieg??sz??t??'].sort()
  }else if(filterObj.subCategory==='konzol/vide??j??t??k'){
    items=['konzol/PC j??t??k','Xbox j??t??k','Playstation j??t??k','konzol/PC tartoz??k','Xbox/Xbox tartoz??k','nintendo/tartoz??k','Playstation/Playstation tartoz??k','egy??b'].sort()
  }else if(filterObj.subCategory==='laptop'){
    items=['laptop/notebook','t??ska','egy??b','t??lt??','mem??ria','merevlemez','v??d??tok','??llv??ny'].sort()
  }else if(filterObj.subCategory==='sz??m??t??g??p/PC'){
    items=['asztali sz??m??t??g??p','monitor/kijelz??','egy??b'].sort()
  }else if(filterObj.subCategory==='tablet'){
    items=['t??lt??','v??d??tok','egy??b','f??lia','billenty??zet','k??bel/adapter'].sort()
  }else if(filterObj.subCategory==='nyomtat??'){
    items=['fekete-feh??r','sz??nes'].sort()
  }else if(filterObj.subCategory==='telefon'){
    items=['mobiltelefon','v??rositelefon','egy??b','v??d??tok','v??d??f??lia','t??lt??','fejhallgat??/headset','akkumul??tor'].sort()
  }else if(filterObj.subCategory==='zenelej??tsz??'){
    items=['r??di??','HiFi','mikr?? HiFi','egy??b','f??llhallgat??','headset'].sort()
  }else if(filterObj.subCategory==='baba/fi??'){
    items=['sapka','s??l','keszty??','kab??t','nadr??g','egy??b','hossz?? ujj??','r??vid ujj??','strandol??shoz','zokni','cip??','papucs','over??l','pul??ver'].sort()
  }else if(filterObj.subCategory==='baba/l??ny'){
    items=['sapka','s??l','keszty??','kab??t','nadr??g','egy??b','hossz?? ujj??','r??vid ujj??','strandol??shoz','zokni','cip??','papucs','over??l','pul??ver','hajp??nt','csat','hajgumi'].sort()
  }else if(filterObj.subCategory==='f??rfi'){
    items=['sapka','s??l','keszty??','kab??t','nadr??g','egy??b','hossz?? ujj??','r??vid ujj??','strandol??shoz','zokni','cip??','papucs','over??l','pul??ver'].sort()
  }else if(filterObj.subCategory==='n??i'){
    items=['sapka','s??l','keszty??','kab??t','nadr??g','egy??b','hossz?? ujj??','r??vid ujj??','strandol??shoz','zokni','cip??','papucs','over??l','pul??ver','hajp??nt','csat','hajgumi'].sort()
  }else if(filterObj.subCategory==='gyermek/fi??'){
    items=['sapka','s??l','keszty??','kab??t','nadr??g','egy??b','hossz?? ujj??','r??vid ujj??','strandol??shoz','zokni','cip??','papucs','over??l','pul??ver'].sort()
  }else if(filterObj.subCategory==='gyermek/l??ny'){
    items=['sapka','s??l','keszty??','kab??t','nadr??g','egy??b','hossz?? ujj??','r??vid ujj??','strandol??shoz','zokni','cip??','papucs','over??l','pul??ver','hajp??nt','csat','hajgumi'].sort()
  }else if(filterObj.subCategory==='feln??tteknek'){
    items=['filoz??fia','igaz-t??rt??nt','kaland/akci??','scifi','egy??b','klasszikus','romantikus','kom??dia','rejt??ly','fantasy','horror','??n??letrajz','t??rt??nelmi']
  }else if(filterObj.subCategory==='gyerekeknek'){
    items=['igaz-t??rt??nt','kaland/akci??','egy??b','mese','vicces','rejt??ly','fantasy','t??rt??nelmi','ismeretterjeszt??','k??pesk??nyv','fejleszt??','tanuls??gos']
  }else if(filterObj.subCategory==='tank??nyv'){
    items=['statisztika & matek','sz??mvitel','p??nz??gy','jogi','nyelvi', 'mikro & makro??kon??mia','politika','strat??gia ??s szervez??s','marketing','gazdas??gtan','informatika','egy??b','orvosi','k??mia','fizika','m??rn??ki','biol??gia','erk??lcs','vall??si',''].sort()
  }else if(filterObj.subCategory==='sz??ll??t??s'){
    items=['hordoz??','babakocsi','ikerbabakocsi','gyerek??l??s'].sort()
  }else if(filterObj.subCategory==='j??t??k'){
    items=['k??nyv','logikai j??t??k','kisbab??knak','egy??b','t??rsasj??t??k','j??t??ksz??nyeg'].sort()
  }else if(filterObj.subCategory==='b??tor'){
    items=['pelenk??z??','kis??gy','egy??b','m??zeskos??r','szekr??ny'].sort()
  }else if(filterObj.subCategory==='j??rm??'){
    items=['motor','haj??','g??pj??rm??','egy??b'].sort()
  }else if(filterObj.subCategory==='desgin'){
    items=['benti lak??s kieg??sz??t??','kerti kieg??sz??t??','egy??b'].sort()
  }else if(filterObj.subCategory==='festm??ny'){
    items=['csend??let','t??j','elvont','portr??','egy??b','modern'].sort()
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
            V??laszd ki mit{' '}
            <Typography color="secondary" variant="inherit" component="span">keresel</Typography>
          </span>
        }
        subtitle="??s vedd meg egy kattint??ssal"
        fadeUp
      />
      <Section className={classes.heroWrapper}>
        <Grid container spacing={isMd ? 6 : 4} className={classes.heroGrid}>

          <Grid item xs={12} className={classes.search}>
            <CardBase variant="outlined" withShadow liftUp>
          <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>Kateg??ria</p>
                <Select
                value={filterObj.subCategory}
                onChange={(e) => handleFilterChange(e, 'subCategory')}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>V??lassz</em>
                  </MenuItem>
                      {subCategories.map(s => {
                        return <MenuItem value={s}>{s}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>T??rgy</p>
                <Select
                value={filterObj.item}
                onChange={(e) => handleFilterChange(e, 'item')}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>el??bb v??lassz kateg??ri??t</em>
                  </MenuItem>
                      {items.map(d => {
                        return <MenuItem value={d}>{d}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>??r</p>
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
                <p>Min??s??g</p>
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

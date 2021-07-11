import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme , withStyles} from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  selectField: {
    width: '100%',
  },
}));

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

const ItemUpdateForm = props => {
  const { className,handleSubmit,
    handleImage,
    handleChange,
    values,
    setValues,
    preview,
    uploadButtonText,
    handleImageRemove = (f) => f,
    editPage = false,
   ...rest } = props;
  const classes = useStyles();

  let items=['előbb válassz al-kategóriát']
  const qualities=['nem használt','alig használt','használt']
  const categories=['bútor/otthon','sport/szabadidő','műszaki cikk','ruha','könyv','mama-baba','alkatrész','művészet']
  let subCategories=['előbb válassz kategóriát']

  if(values.category==='bútor/otthon'){
    subCategories=['benti bútor','kinti bútor','bárhol tárolható']
  }else if(values.category==='sport/szabadidő'){
    subCategories=['labdarúgás','kosárlabda','röplabda','kézilabda','küzdősport','jégkorong/korcsolya','sakk','tenisz','vízisport','túra','futás','séta','lovaglás','téli sport','golf','asztalitenisz','társasjáték','darts','snooker/biliárd'].sort()
  }else if(values.category==='műszaki cikk'){
    subCategories=['telefon','számítógép/PC','tablet','laptop','zenelejátszó','TV','fényképező','konzol/videójáték','nyomtató'].sort()
  }else if(values.category==='ruha'){
    subCategories=['férfi','női','gyermek/fiú','gyermek/lány','baba/fiú','baba/lány'].sort()
  }else if(values.category==='könyv'){
    subCategories=['gyerekeknek','tankönyv','felnőtteknek'].sort()
  }else if(values.category==='mama-baba'){
    subCategories=['játék','szállítás','bútor'].sort()
  }else if(values.category==='alkatrész'){
    subCategories=['jármű'].sort()
  }else if(values.category==='művészet'){
    subCategories=['festmény','design','szobor'].sort()
  }

  if(values.subCategory==='benti'){
    items=['szék','asztal','kanapé','lámpa','kád','zuhany','fotel','ágy','evőeszköz','egyéb','garnitúra','szekrény','ajtó','tégla','csempe'].sort()
  }else if(values.subCategory=== 'kinti bútor'){
    items=['napernyő','napágy','kiülő','hintaágy','kinti-ágy','medence','jacuzzi','egyéb','ajtó','tégla','csempe','szék'].sort()
  }else if(values.subCategory==='bárhol tárolható'){
    items=['szék','asztal','kanapé','lámpa','kád','zuhany','ajtó','tégla','csempe','fotel','ágy','evőeszköz','egyéb','garnitúra','napernyő','napágy','kiülő','hintaágy','kinti-ágy','medence','jacuzzi'].sort()
  }else if(values.subCategory==='labdarúgás'){
    items=['focilabda','focicipő','sipcsontvédő','melegítő','gatya','rövidujú','hosszujjú']
  }else if(values.subCategory==='asztalitenisz'){
    items=['labda','ütő','pingpong asztal','háló'].sort()
  }else if(values.subCategory==='darts'){
    items=['nyilak','tábla','egyéb'].sort()
  }else if(values.subCategory==='futás'){
    items=['futócipő','stopper óra','ruházat','napszemüveg','egyéb','sapka'].sort()
  }else if(values.subCategory==='golf'){
    items=['golfütő','golfütő szett','labda','golfcipő','egyéb'].sort()
  }else if(values.subCategory==='jégkorong/korcsolya'){
    items=['korong','hokiütő','pengevédő','korcsolya','élvédő','védőruha','fogvédő','egyéb'].sort()
  }else if(values.subCategory==='kosárlabda'){
    items=['kosárlabda','cipő','fogvédő','háló','palánk','egyéb'].sort()
  }else if(values.subCategory==='kézilabda'){
    items=['kézilabda','wax','cipő','egyéb'].sort()
  }else if(values.subCategory==='küzdősport'){
    items=['fogvédő','zsák','sipcsontvédő','szuszpenzor','box kesztyű','egyéb','zsákoló kesztyű'].sort()
  }else if(values.subCategory==='lovaglás'){
    items=['védőfelszerelés','pálca','csizma','nadrág','egyéb'].sort()
  }else if(values.subCategory==='röplabda'){
    items=['röplabda','háló','gatya','strandröplabda','egyéb'].sort()
  }else if(values.subCategory==='snooker/biliárd'){
    items=['golyó','dákó','asztal','egyéb'].sort()
  }else if(values.subCategory==='séta'){
    items=['sétabot','egyéb'].sort()
  }else if(values.subCategory==='tenisz'){
    items=['teniszlabda','teniszütő','tok','háló','egyéb'].sort()
  }else if(values.subCategory==='társasjáték'){
    items=['stratégia','család','logikai','egyéb','tábla','kvíz','ügyességi'].sort()
  }else if(values.subCategory==='téli sport'){
    items=['síelés','snowboard','szánkó','egyéb','curling','egyéb','jégkorcsolya'].sort()
  }else if(values.subCategory==='túra'){
    items=['cipő','hűtőtáska','walking stick','kemping holmi'].sort()
  }else if(values.subCategory==='vízisport'){
    items=['vízilabda','úszószemüveg','úszósapka','egyéb','sup','kajak-kenu','sárkányhajó','katamarán','wakeboard','vízisí','buvárkodás'].sort()
  }else if(values.subCategory==='sakk'){
    items=['sakktábla','óra','egyéb'].sort()
  }else if(values.subCategory==='TV'){
    items=['LED','LCD','egyéb','OLED','QLED','projektoros'].sort()
  }else if(values.subCategory==='fényképező'){
    items=['fotógép','videókamera','egyéb','fotógép kiegészítő','videókamera kiegészítő'].sort()
  }else if(values.subCategory==='konzol/videójáték'){
    items=['konzol/PC játék','Xbox játék','Playstation játék','konzol/PC tartozék','Xbox/Xbox tartozék','nintendo/tartozék','Playstation/Playstation tartozék','egyéb'].sort()
  }else if(values.subCategory==='laptop'){
    items=['laptop/notebook','táska','egyéb','töltő','memória','merevlemez','védőtok','állvány'].sort()
  }else if(values.subCategory==='számítógép/PC'){
    items=['asztali számítógép','monitor/kijelző','egyéb'].sort()
  }else if(values.subCategory==='tablet'){
    items=['töltő','védőtok','egyéb','fólia','billentyűzet','kábel/adapter'].sort()
  }else if(values.subCategory==='nyomtató'){
    items=['fekete-fehér','színes'].sort()
  }else if(values.subCategory==='telefon'){
    items=['mobiltelefon','várositelefon','egyéb','védőtok','védőfólia','töltő','fejhallgató/headset','akkumulátor'].sort()
  }else if(values.subCategory==='zenelejátszó'){
    items=['rádió','HiFi','mikró HiFi','egyéb','füllhallgató','headset'].sort()
  }else if(values.subCategory==='baba/fiú'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver'].sort()
  }else if(values.subCategory==='baba/lány'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver','hajpánt','csat','hajgumi'].sort()
  }else if(values.subCategory==='férfi'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver'].sort()
  }else if(values.subCategory==='női'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver','hajpánt','csat','hajgumi'].sort()
  }else if(values.subCategory==='gyermek/fiú'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver'].sort()
  }else if(values.subCategory==='gyermek/lány'){
    items=['sapka','sál','kesztyű','kabát','nadrág','egyéb','hosszú ujjú','rövid ujjú','strandoláshoz','zokni','cipő','papucs','overál','pulóver','hajpánt','csat','hajgumi'].sort()
  }else if(values.subCategory==='felnőtteknek'){
    items=['filozófia','igaz-történt','kaland/akció','scifi','egyéb','klasszikus','romantikus','komédia','rejtély','fantasy','horror','önéletrajz','történelmi']
  }else if(values.subCategory==='gyerekeknek'){
    items=['igaz-történt','kaland/akció','egyéb','mese','vicces','rejtély','fantasy','történelmi','ismeretterjesztő','képeskönyv','fejlesztő','tanulságos']
  }else if(values.subCategory==='tankönyv'){
    items=['statisztika & matek','számvitel','pénzügy','jogi','nyelvi', 'mikro & makroökonómia','politika','stratégia és szervezés','marketing','gazdaságtan','informatika','egyéb','orvosi','kémia','fizika','mérnöki','biológia','erkólcs','vallási',''].sort()
  }else if(values.subCategory==='szállítás'){
    items=['hordozó','babakocsi','ikerbabakocsi','gyerekülés'].sort()
  }else if(values.subCategory==='játék'){
    items=['könyv','logikai játék','kisbabáknak','egyéb','társasjáték','játékszőnyeg'].sort()
  }else if(values.subCategory==='bútor'){
    items=['pelenkázó','kiságy','egyéb','mózeskosár','szekrény'].sort()
  }else if(values.subCategory==='jármű'){
    items=['motor','hajó','gépjármű','egyéb'].sort()
  }else if(values.subCategory==='desgin'){
    items=['benti lakás kiegészítő','kerti kiegészítő','egyéb'].sort()
  }else if(values.subCategory==='festmény'){
    items=['csendélet','táj','elvont','portré','egyéb','modern'].sort()
  }else if(values.subCategory==='szobor'){
    items=['benti','kinti'].sort()
  }

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
      <>

        {values && (
        <form onSubmit={handleSubmit}>
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 6 : 2}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Kategória
          </Typography>
            <FormControl className={classes.selectField}>
          <Select
          value={values.category}
          onChange={handleChange}
          name='category'
          input={<BootstrapInput />}
          >
            <MenuItem value="">
            <em>Válassz</em>
            </MenuItem>
                {categories.map((c,i) => {
                  return <MenuItem key={i} value={c}>{c}</MenuItem>;
              })}
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            al-Kategória
          </Typography>
            <FormControl className={classes.selectField}>
          <Select
          value={values.subCategory}
          onChange={handleChange}
          name='subCategory'
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
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Milyen termék
          </Typography>
            <FormControl className={classes.selectField}>
          <Select
          value={values.item}
          onChange={handleChange}
          name='item'
          input={<BootstrapInput />}
          >
            <MenuItem value="">
            <em>Válassz</em>
            </MenuItem>
                {items.map(i => {
                  return <MenuItem value={i}>{i}</MenuItem>;
              })}
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Minőség
          </Typography>
            <FormControl className={classes.selectField}>
          <Select
          value={values.quality}
          onChange={handleChange}
          name='quality'
          input={<BootstrapInput />}
          >
            <MenuItem value="">
            <em>Válassz</em>
            </MenuItem>
                {qualities.map(q => {
                  return <MenuItem value={q}>{q}</MenuItem>;
              })}
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Dolog amit eladsz
          </Typography>
          <TextField
            placeholder="pl. Nike Airmax"
            variant="outlined"
            size="medium"
            name="name"
            fullWidth
            type="text"
            value={values.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
          Ár
          </Typography>
          <TextField
            placeholder="Forintban"
            variant="outlined"
            size="medium"
            name="price"
            fullWidth
            type="number"
            value={values.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Leírás
          </Typography>
          <TextField
            placeholder="pl. méret, minőség és stb."
            variant="outlined"
            name="description"
            fullWidth
            multiline
            value={values.description}
            onChange={handleChange}
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle3"
            color="textPrimary"
            className={classes.inputTitle}
          >
             Az elérhetőségedet valamint az utca címet kizárólag azután fogja látni a vevő miután már megvette a terméked
          </Typography>
            <p>Azt a címet add meg ahol a vevő át fogja tudni venni a terméket tőled</p>

          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Emailcímed
          </Typography>
          <TextField
            placeholder=""
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            type="text"
            value={values.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Telefonszámod
          </Typography>
          <TextField
            placeholder=""
            variant="outlined"
            size="medium"
            name="phone"
            fullWidth
            type="number"
            value={values.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Város
          </Typography>
          <TextField
            placeholder="pl. Budapest  "
            variant="outlined"
            size="medium"
            name="city"
            fullWidth
            type="text"
            value={values.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Utca/szám
          </Typography>
          <TextField
            placeholder=""
            variant="outlined"
            size="medium"
            name="street"
            fullWidth
            type="text"
            value={values.street}
            onChange={handleChange}
          />
        </Grid>

        <Grid item container justify="flex-start" xs={12}>
          <Button
          onClick={handleSubmit}
          disabled={values.loading || values.uploading}
          className="btn btn-primary"
          loading={values.loading}
          variant="contained"
          type="submit"
          color="primary"
          size="large"
          >
            {values.loading ? "Mentés..." : "Mentés és folytatás"}
          </Button>
        </Grid>
      </Grid>
    </div>
      </form>
    )}
      </>
  );
};

ItemUpdateForm.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ItemUpdateForm;

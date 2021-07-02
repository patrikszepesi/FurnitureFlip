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
  const categories=['bútor','sporteszköz','ruha','elektronikai','építéshez','gyerek','ékszer','egyéb']
  let subCategories=['előbb válassz kategóriát']

  if(values.category==='bútor'){
    subCategories=['benti bútor','kertibútor','vegyes']
  }else if(values.category==='sporteszköz'){
    subCategories=['labdarúgás','kosárlabda','röplabda','kézilabda','küzdősport','hoki','tenisz','vizisport','egyéb']
  }


  if(values.subCategory==='benti bútor'){
    items=['szék','asztal','kanapé','lámpa','kád','zuhany','fotel','ágy']
  }else if(values.subCategory=== 'kertibútor'){
    items=['napernyő','napágy','kiülő','hintaágy','ágy']
  }else if(values.subCategory==='vegyes'){
    items=['szék','asztal','kanapé','lámpa','kád','zuhany','fotel','ágy','kertibútor','napernyő','napágy','kiülő','hintaágy','ágy']
  }else if(values.subCategory==='labdarúgás'){
    items=['focilabda','focicipő','sipcsontvédő','melegítő','gatya','rövidujú','hosszujjú']
  }

console.log(values)
console.log("here55")

  // const children = [];
  // for (let i = 1000; i <= 15000; i+=500) {
  //   children.push(<Option key={i.toFixed(2)}>HUF{i}</Option>);
  // }

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

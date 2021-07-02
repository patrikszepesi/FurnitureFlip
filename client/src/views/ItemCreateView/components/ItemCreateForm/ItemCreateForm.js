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

const ItemCreateForm = props => {
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
        {values && values.categories!=undefined && (
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
                {values.categories.map((c,i) => {
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

ItemCreateForm.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ItemCreateForm;

// import { Select, Button, Avatar, Badge } from "antd";
//
// const { Option } = Select;
//
// const CourseCreateForm = ({
//   handleSubmit,
//   handleImage,
//   handleChange,
//   values,
//   setValues,
//   preview,
//   uploadButtonText,
//   handleImageRemove = (f) => f,
//   editPage = false,
// }) => {
//   console.log(values)
//   const children = [];
//   for (let i = 1000; i <= 15000; i+=500) {
//     children.push(<Option key={i.toFixed(2)}>HUF{i}</Option>);
//   }
//   return (
//     <>
//       {values && values.categories!=undefined && (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Name"
//               value={values.name}
//               onChange={handleChange}
//             />
//           </div>
//
//           <div className="form-group">
//             <textarea
//               name="description"
//               cols="7"
//               rows="7"
//               value={values.description}
//               className="form-control"
//               onChange={handleChange}
//             ></textarea>
//           </div>
//
//           <div className="form-row">
//             <div className="col">
//               <div className="form-group">
//                 <Select
//                   style={{ width: "100%" }}
//                   size="large"
//                   value={values.paid}
//                   onChange={(v) => setValues({ ...values, paid: v, price: 0 })}
//                 >
//                   <Option value={true}>Fizetős kurzus</Option>
//                   <Option value={false}>Ingyenes</Option>
//                 </Select>
//               </div>
//             </div>
//
//             {values.paid && (
//               <div className="form-group">
//                 <Select
//               defaultValue="HUF 1000"
//                   style={{ widht: "100%" }}
//                   onChange={(v) => setValues({ ...values, price: v })}
//                   tokenSeparators={[,]}
//                   size="large"
//                 >
//                   {children}
//                 </Select>
//               </div>
//             )}
//           </div>
//
//           <div className="form-group">
//           <label>Kategória</label>
//           <select name="category" className="form-control" onChange={handleChange}>
//             <option>Válassz</option>
//             {values.categories.map(c => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//         <label>Nehézség</label>
//         <select name="difficulty" className="form-control" onChange={handleChange}>
//           <option>Válassz</option>
//           {values.difficulties.map(d => (
//             <option key={d} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>
//       </div>
//
//           <div className="form-row">
//             <div className="col">
//               <div className="form-group">
//                 <label className="btn btn-outline-secondary btn-block text-left">
//                   {uploadButtonText}
//                   <input
//                     type="file"
//                     name="image"
//                     onChange={handleImage}
//                     accept="image/*"
//                     hidden
//                   />
//                 </label>
//               </div>
//             </div>
//
//             {preview && (
//               <Badge count="X" onClick={handleImageRemove} className="pointer">
//                 <Avatar width={200} src={preview} />
//               </Badge>
//             )}
//
//             {editPage && values.image && (
//               <Avatar width={200} src={values.image.Location} />
//             )}
//           </div>
//
//           <div className="row">
//             <div className="col">
//               <Button
//                 onClick={handleSubmit}
//                 disabled={values.loading || values.uploading}
//                 className="btn btn-primary"
//                 loading={values.loading}
//                 type="primary"
//                 size="large"
//                 shape="round"
//               >
//                 {values.loading ? "Mentés..." : "Mentés és folytatás"}
//               </Button>
//             </div>
//           </div>
//         </form>
//       )}
//     </>
//   );
// };
//
// export default CourseCreateForm;

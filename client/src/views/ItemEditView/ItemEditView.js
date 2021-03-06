import React, { useState, useEffect } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router";
import clsx from 'clsx';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box, List, ListItem, Grid, Typography } from '@material-ui/core';
import { SectionAlternate, CardBase } from '../../../components/organisms';
import { Hero, ItemUpdateForm } from './components';
import InstructorRoute from "../../../components/routes/InstructorRoute";
import FileUpload from "../../../components/forms/FileUpload";
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  rootForSpinner: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }},

  section: {
    '& .section-alternate__content': {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: 'relative',
      zIndex: 1,
    },
    '& .card-base__content': {
      padding: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
      },
    },
  },
  menu: {
    height: 'auto',
  },
  list: {
    display: 'inline-flex',
    overflow: 'auto',
    flexWrap: 'nowrap',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3),
    },
  },
  listItem: {
    marginRight: theme.spacing(2),
    flex: 0,
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      borderLeft: '2px solid transparent',
    },
  },
  listItemActive: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`,
    },
    '& .menu__item': {
      color: theme.palette.text.primary,
    },
  },
}));

const subPages = [
  {
    id: 'general',
    title: 'Adatok m??dos??t??sa',
  },
];

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const ItemCreateView = (props = {}) => {
  const [values, setValues] = useState({
      name: "",
      description: "",
      price: ' ',
      uploading: false,
      category:"",
      categories:['b??tor/otthon','sport/szabadid??','m??szaki cikk','ruha','k??nyv','mama-baba','alkatr??sz','m??v??szet'],
      subCategory:'',
      item:'',
      email:'',
      phone:'',
      city:'',
      street:'',
      quality:'',
      loading: false,
      images:[]
    });

  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
  if(slug) loadItem();
  }, [slug]);

  const loadItem = async () => {
    const { data } = await axios.get(`/api/course-owner/${slug}`);
    if(data==String(404)){
      router.push("/")
    }
    if (data) setValues(data);
    if (data && data.image) setImage(data.image);
  };



  const classes = useStyles();
  let pageId =  'general';

    const [image, setImage] = useState({});
    const [preview, setPreview] = useState("");
    const [uploadButtonText, setUploadButtonText] = useState("Bor??t??k??p felt??lt??se");
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
      let file = e.target.files[0];
      setPreview(window.URL.createObjectURL(file));
      setUploadButtonText(file.name);
      setValues({ ...values, loading: true });
      Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
        try {
          let { data } = await axios.post("/api/course/upload-image", {
            image: uri,
          });
          console.log("IMAGE UPLOADED", data);
          setImage(data);
          setValues({ ...values, loading: false });
        } catch (err) {
          console.log(err);
          setValues({ ...values, loading: false });
          toast("Image upload failed. Try later.");
        }
      });
    };

    const handleImageRemove = async () => {
      try {
        setValues({ ...values, loading: true });
        const res = await axios.post("/api/course/remove-image", { image });
        setImage({});
        setPreview("");
        setUploadButtonText("Upload Image");
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try later.");
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(`/api/course/${values._id}`, {
          ...values,
          image,
        });
        toast("A term??k adatainak m??dos??t??sa megt??rt??nt", {
           duration: 4000,
      style: {
      border: '5px solid #E1C699',
      padding: '16px',
      color: '#713200',
      minWidth:'800px',
      marginTop:'70px',
      },
      iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
      },
      })
        router.push("/seller");
      } catch (err) {
        toast(err.response.data);
      }
    };

  return (
    <InstructorRoute>
    <Toaster />
    <div className={classes.root}>
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardBase withShadow align="left" className={classes.menu}>
              <List disablePadding className={classes.list}>
                {subPages.map((item, index) => (
                  <ListItem
                    key={index}
                    component={'a'}
                    href={item.href}
                    className={clsx(
                      classes.listItem,
                      pageId === item.id ? classes.listItemActive : {},
                    )}
                    disableGutters
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      color="textSecondary"
                      className="menu__item"
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardBase>
          </Grid>
          <Grid item xs={12} md={9}>
            <CardBase withShadow align="left">
              <TabPanel value={pageId} index={'general'}>
              <h3>Term??k adatai</h3>
              {loading? (<div className={classes.rootForSpinner}>
                <CircularProgress />
                </div>):(<FileUpload
                    values={values}
                    setValues={setValues}
                    setLoading={setLoading}
                  />)}
                <ItemUpdateForm
                  handleSubmit={handleSubmit}
                  handleImage={handleImage}
                  handleChange={handleChange}
                  values={values}
                  setValues={setValues}
                  preview={preview}
                  uploadButtonText={uploadButtonText}
                  handleImageRemove={handleImageRemove} />
              </TabPanel>
            </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
    </InstructorRoute>
  );
};

export default ItemCreateView;

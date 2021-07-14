import { useState, useEffect,useRef } from "react";
import axios from "axios";
import CourseCard from "../../../../components/cards/CourseCard";
import Link from "next/link";
import Search from '../../../../components/forms/Search';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  colors,
  Avatar,
  NoSsr,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LearnMoreLink, Image } from '../../../../components/atoms';
import { SectionHeader, SwiperImage } from '../../../../components/molecules';
import { CardProduct, SectionAlternate, Section } from '../../../../components/organisms';
import Rating from '@material-ui/lab/Rating';
import { useRouter } from "next/router";
import slugify from "slugify";




const useStyles = makeStyles(theme => ({
  cardProduct: {
    borderRadius: theme.spacing(3),
  },
  courseCardPrice: {
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },

  list:{
    padding: theme.spacing(2),
  },

//
  image: {
    objectFit: 'cover',
  },
  fontWeight700: {
    fontWeight: 700,
  },
  coursesSection: {
    maxWidth: 600,
    margin: '0 auto',
  },

paddingBottom0: {
    paddingBottom: 20,
  },
}));
//

const CategoryFurnitureView = ({ courses,className,...rest }) => {

  const router = useRouter();
  const classes = useStyles();
  const [ coursesAfterSearch,setCoursesAfterSearch]=useState([])

  const [filterObj, setFilterObj] = useState({
    subCategory: '',
    item: '',
    price:'',
    category:'bútor/otthon',
    quality:'',
    city:'',
  });



  const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });

  const fetchProperties = async() => {
    const { data } = await axios.post(`/api/search/filters`,{
      toSend:{...filterObj}

    });
      setCoursesAfterSearch(data);
      //setCoursesCount(res.data.length);
  };

  useEffect(() => {
    fetchProperties()
  }, [filterObj /*currentPage*/]);

   return (
    <>

    <Search
      filterObj={filterObj}
      categoryToFilter={'bútor'}
      onFilterChange={newFilterObj => setFilterObj(newFilterObj)}
       />

       <div className={classes.list} >
           <SectionHeader
             subtitle=""
             fadeUp
           />
           {coursesAfterSearch.length < 1 ? ( <SectionHeader
              subtitle="Nem találtunk ilyen terméket, esetleg próbáld meg más keresési paraméterekkel"
              fadeUp
            />):( <Grid container spacing={isMd ? 4 : 2}>
              {coursesAfterSearch.map((item, index) => (
                <Grid key={index} item xs={12} sm={12} md={3} data-aos="fade-up">
                  <CardProduct
                    className={classes.cardProduct}
                    withShadow
                    liftUp
                    mediaContent={
                      <>
                        <Image
                          src={item.images[0].Location}
                          alt={item.title}
                          lazyProps={{ width: '100%', height: '100%' }}
                          className={classes.image}
                        />
                        <div className={classes.courseCardPrice}>
                          <Typography
                            variant="body1"
                            color="primary"
                            className={classes.fontWeight700}
                          >
                            {item.price} Forint
                          </Typography>
                        </div>
                      </>
                    }
                    cardContent={
                      <Grid container spacing={1}>
                        <Grid item  onClick={() => router.push(`/item/${slugify(item._id.toLowerCase())}`)} xs={12}>
                          <Typography
                            variant="h6"
                            color="textPrimary"
                            align="left"
                            className={classes.fontWeight700}
                          >
                            {item.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            align="left"
                          >
                            {item.quality}
                          </Typography>
                        </Grid>
                        <Grid item container justify="space-between" xs={12}>

                          <Grid
                            item
                            container
                            alignItems="center"
                            justify="flex-end"
                            xs={6}
                          >

                            <Typography
                              component="span"
                              variant="body1"
                              className={classes.fontWeight700}
                            >
                              {item.location}
                            </Typography>

                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <LearnMoreLink
                            title="Megnézem"
                            variant="body1"
                            item={item._id}
                            color="primary"
                          />
                        </Grid>
                      </Grid>
                    }
                  />
                </Grid>
              ))}
            </Grid>)}
           <Section className="paddingBottom0">
             <Divider />
           </Section>


         </div>


    </>
  );
};
export default CategoryFurnitureView;

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
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { LearnMoreLink } from '../../../../components/atoms';
import { SectionHeader, SwiperImage } from '../../../../components/molecules';
import { CardProduct } from '../../../../components/organisms';
import Rating from '@material-ui/lab/Rating';
import { useRouter } from "next/router";



const useStyles = makeStyles(theme => ({
  swiperNavButton: {
    width: `${theme.spacing(3)}px !important`,
    height: `${theme.spacing(3)}px !important`,
    padding: `${theme.spacing(2)}px !important`,
  },
  locationCardPrice: {
    padding: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    zIndex: 3,
  },
  fontWeight700: {
    fontWeight: 700,
  },
  locationCardReviewAvatar: {
    marginLeft: theme.spacing(-2),
    border: `3px solid ${theme.palette.background.paper}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  locationCardReviewStar: {
    color: colors.yellow[800],
    marginRight: theme.spacing(1 / 2),
  },
  reviewCount: {
    marginLeft: theme.spacing(1),
  },
  image: {
    borderBottomLeftRadius: '40%',
  },
}));

const CategoryView = ({ courses,className,...rest }) => {

  const classes = useStyles();
  const [ coursesAfterSearch,setCoursesAfterSearch]=useState([])

  const [filterObj, setFilterObj] = useState({
    subcategory: '',
    item: '',
    price:'',
    category:'web-design',
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
<div>
    <Search
      filterObj={filterObj}
      onFilterChange={newFilterObj => setFilterObj(newFilterObj)}

       />

      <Grid container spacing={5}>
        {coursesAfterSearch && coursesAfterSearch.map((item, index) => (
          <Grid key={index} item xs={12} sm={12} md={4} data-aos="fade-up">
          <Link href={`/course/${item.slug}`}>
            <CardProduct
              withShadow
              liftUp
              mediaContent={
                <>
                  <SwiperImage
                    navigationButtonStyle={classes.swiperNavButton}
                    items={item.images[0].Location}
                    imageClassName={classes.image}
                  />
                  <div className={classes.locationCardPrice}>
                    <Typography
                      variant="body1"
                      color="primary"
                      className={classes.fontWeight700}
                    >
                      {item.price + ' Forint'}
                    </Typography>
                  </div>
                </>
              }
              cardContent={
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      align="center"
                      className={classes.fontWeight700}
                    >
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      align="left"
                      className={classes.fontWeight700}
                    >
                      {'oktatja: ' + item.quality}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      align="left"
                    >
                      {item.category}
                    </Typography>
                  </Grid>
                  <Grid item container justify="space-between" xs={12}>
                  </Grid>
                  <Grid item container justify="flex-end" xs={12}>
                    <LearnMoreLink title="Megnézem" />
                  </Grid>
                </Grid>
              }
            />
              </Link>
          </Grid>
        ))}
      </Grid>
      </div>

    </>
  );
};
export default CategoryView;
// SEO practice, get courses ASAP, not only when component renders(useEffect) NOT USED NOW BC ONLY ONES THAT ARE PUBLISHED AS TRUE ARE RETURNED HERE

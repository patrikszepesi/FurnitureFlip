import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import { Image } from '../../../../../components/atoms';
import { DescriptionCta } from '../../../../../components/molecules';
import { CardProduct } from '../../../../../components/organisms';
import { useRouter } from "next/router";



const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      padding: theme.spacing(2),
    },
    '& .card-product__media': {
      minHeight: 300,
    },
  },
  image: {
    objectFit: 'cover',
  },
  blogTitle: {
    fontWeight: 700,
  },
  button:{
    margin: theme.spacing(1, 3, 3, 1),

  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    fontWeight: 700,
    margin: theme.spacing(0, 1, 1, 0),
  },
  author: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    fontWeight: 'bold',
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Items = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const router = useRouter();

console.log(data)
  const BlogMediaContent = props => (
    <Image
      src={props.Location}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );
//
  const Content = props => (
    <div>
      <div className={classes.tags}>

      </div>
      <Typography
        variant="h6"
        color="textPrimary"
        className={classes.blogTitle}
        align="center"
      >
        {props.title}
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.author}
        align="center"
      >
        <i>
        <Button  onClick={() => router.push(`seller/item/edit/${props.tags}`)} className={classes.button} variant="outlined" color="primary" size="large">
          Szerkeztés
        </Button>
        <Button  onClick={() => router.push(`/item/${props.tags}`)} className={classes.button} variant="outlined" color="primary" size="large">
           Megtekntés
        </Button>
        </i>
      </Typography>
    </div>
  );
//
  return (
    <div className={className} {...rest}>
      <DescriptionCta
        title="Eladásra bocsátott termékeid"
        primaryCta={
          <Button onClick={()=>router.push("seller/item/create")} variant="outlined" color="primary" size="large">
            Eladok mást is
          </Button>
        }
        align={'left'}
        titleProps={{
          variant: 'h4',
          color: 'textPrimary',
          className: classes.title,
        }}
        className={classes.descriptionCta}
        data-aos="fade-up"
      />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} key={index} data-aos="fade-up">
            <CardProduct
              withShadow
              liftUp
              className={classes.cardProduct}
              mediaContent={
                <BlogMediaContent {...item.images[0]} alt={item.title} />
              }
              cardContent={
                <Content
                  title={item.name}
                  subtitle={item.item}
                  author={item.author}
                  date={item.date}
                  tags={item._id}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Items.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Items;

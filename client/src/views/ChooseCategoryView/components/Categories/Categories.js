import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import Link from 'next/link'
import { SectionHeader, IconAlternate, TypedText } from '../../../../../components/molecules';
import { CardCategory } from '../../../../../components/organisms';
import { useRouter } from "next/router";
import slugify from "slugify";


const useStyles = makeStyles(theme => ({
  typed: {
    fontWeight: 'bold',
  },
}));

const Categories = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const router = useRouter();


  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const capitalizeFirstLetter = string =>  {
    return string[0].toUpperCase() + string.slice(1);
}

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <>
            Keress a kategóriák  <br /> közül{' '}
            {isMd ? null : <br />} &nbsp;
            <TypedText
              component="span"
              variant="h4"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: [
                  'Gyorsan',
                  'Egyszerűen',
                  'Hatékonyan',

                ],
                typeSpeed: 50,
                loop: true,
              }}
            />
          </>
        }
        align="left"
      />
      <Grid container spacing={isMd ? 4 : 1}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={6}
            md={3}
            data-aos="fade-up"
          >


            <CardCategory
              variant="outlined"
              liftUp
              onClick={() => router.push(`/category/${slugify(item.title.toLowerCase())}`)}
              align="left"
              title={item.title}
              icon={
                <IconAlternate
                  fontIconClass={item.icon}
                  size="medium"
                  color={item.iconColor}
                />

              }
            />

          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;

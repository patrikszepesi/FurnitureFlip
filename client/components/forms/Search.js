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
//
const Search = ({categoryToFilter}) => {
  const classes = useStyles();

  let subCategories=[]
  let qualities=[]
  let prices=[]
  let items=[]
  let difficulties=[]

  if(categoryToFilter==='bútor'){
     subCategories=['benti bútor','kinti bútor']
     qualities=['új','alig használt','használt']
     prices=[1000-8000,8000-20000,20000-50000,50000-100000,100000-200000,200000-350000,350000]
     items=['ágy','matrac']
     difficulties=['a']
  }




  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

    const handleFilterChange = (name, value) => {
      let newValue = value;

      const newFilterObj = { ...filterObj, [name]: newValue };

      // debounce for price change
      if (name === 'price') {
        setPrice(newFilterObj.price);
        debouncedSave(newFilterObj);
      } else {
        onFilterChange(newFilterObj);
      }
    };

  return (
    <section className={classes.hero}>
    <SectionHeader
        title={
          <span>
            Choose your course by{' '}
            <Typography color="secondary" variant="inherit" component="span">categories</Typography>
          </span>
        }
        subtitle="Browse the available course categories, choose your favourite one and start learning."
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
                value={'age'}
                onChange={handleFilterChange}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>None</em>
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
                value={'age'}
                onChange={handleFilterChange}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>None</em>
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
                value={'age'}
                onChange={handleFilterChange}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>None</em>
                  </MenuItem>
                      {prices.map(d => {
                        return <MenuItem value={d}>{d}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className={classes.textField}>
                <p>Minőség</p>
                <Select
                value={'age'}
                onChange={handleFilterChange}
                input={<BootstrapInput />}
                >
                  <MenuItem value="">
                  <em>None</em>
                  </MenuItem>
                      {qualities.map(d => {
                        return <MenuItem value={d}>{d}</MenuItem>;
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

// import React, { useState,useEffect } from "react";
// import { DatePicker, Select } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import moment from "moment";
// import Link from 'next/link'
//
//
// const { Option } = Select;
//
//
//
// const Search = ({filterObj,onFilterChange}) => {
//
//   const [courses, setCourses] = useState("");
//   const [coursesCount, setCoursesCount] = useState("");
//   console.log(courses)
//
//
//   const categories=["pénzügy","számvitel","programozás","mesterséges intelligencia","Microsoft Excel","egyéb informatika","design","marketing","életmód","fotózás","zene","matematika","statisztika","kémia","biológia","anatómia","egyéb"]
//   const difficulties=['kezdő','haladó','profi']
//   const stars=[2,2.5,3,3.5,4,4.5,5]
//
//   const handleFilterChange = (name, value) => {
//     let newValue = value;
//
//     const newFilterObj = { ...filterObj, [name]: newValue };
//
//     // debounce for price change
//     if (name === 'price') {
//       setPrice(newFilterObj.price);
//       debouncedSave(newFilterObj);
//     } else {
//       onFilterChange(newFilterObj);
//     }
//   };
//
//
//   return (
//     <div className="d-flex pb-4">
//       <div className="w-100">
//       <Select
//         value={filterObj.category}
//         onChange={value => handleFilterChange('category', value)}
//         className="w-100"
//         size="large"
//         placeholder="Kategória"
//         options={categories.map(c => ({
//       label: c.toUpperCase(),
//       value: c
//     }))}
//       >
//       </Select>
//       </div>
//
//       <div className="w-100">
//       <Select
//         value={filterObj.difficulty}
//         onChange={value => handleFilterChange('difficulty', value)}
//         className="w-100"
//         size="large"
//         placeholder="Nehézség"
//         options={difficulties.map(d => ({
//       label: d.toUpperCase(),
//       value: d
//     }))}
//       >
//       </Select>
//       </div>
//
//       <div className="w-100">
//       <Select
//         value={filterObj.star}
//         onChange={value => handleFilterChange('star', value)}
//         className="w-100"
//         size="large"
//         placeholder="Csillagok"
//         options={stars.map(s => ({
//       label: s,
//       value: s
//     }))}
//       >
//       </Select>
//
//       </div>
//     </div>
//   );
// };
//
// export default Search;

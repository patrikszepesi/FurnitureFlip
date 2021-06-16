import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';
import { CardBase } from '../../../../../components/organisms';

const useStyles = makeStyles(theme => ({
  cardBase: {
    boxShadow: 'none',
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(1),
    '& .card-base__content': {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
  },
  avatar: {
    width: 110,
    height: 110,
    border: `4px solid ${theme.palette.background.paper}`,
    borderRadius: '100%',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  },
  listItem: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 0,
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  a :{

    color: '#000000'


  },
}));

const MyCourses = props => {
  const { courses, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
console.log(courses)
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Kellemes Tanulást"
        subtitle=""
        align={isMd ? 'center' : 'left'}
      />
      <Grid container spacing={isMd ? 2 : 1}>
        {courses && courses.map((course, index) => (
          <Grid item xs={10} key={index} data-aos="fade-up">
            <CardBase className={classes.cardBase} liftUp>

              <ListItem disableGutters className={classes.listItem}>

                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar src={course.image.Location} className={classes.avatar} />
                </ListItemAvatar>
                <Link
                    href={`/user/course/${course.slug}`}
                    className="pointer">

                    <a className={classes.a}><ListItemText
                       className={classes.listItemText}
                       primary={course.name}
                       secondary={course.lessons.length+ " leckét tartalmaz"}
                       primaryTypographyProps={{
                         className: classes.title,
                         variant: 'h6',
                         align: isMd ? 'left' : 'center',
                       }}
                       secondaryTypographyProps={{
                         color: 'textPrimary',
                         align: isMd ? 'left' : 'center',
                       }}

                     /></a>
                 </Link>


              </ListItem>
              <p>{'Oktató:            ' +  course.instructor.name}</p>
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

MyCourses.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  courses: PropTypes.array.isRequired,
};

export default MyCourses;

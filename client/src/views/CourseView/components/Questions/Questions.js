import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { IconAlternate } from '../../../../../components/molecules';
import { Accordion } from '../../../../../components/organisms';


const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  accordionGrid: {
    '& .accordion__item-wrapper': {
      boxShadow: '0 1.5rem 4rem rgba(22,28,45,.05)',
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontWeight300: {
    fontWeight: 300,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  listItemText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.light,
    color: 'white',
    fontWeight: 700,
  },
}));



const Questions = props => {
  const { course,data, className, ...rest } = props;
  let chapters=[]
  if(course!=undefined&& course.lessons!=undefined && course.lessons.length>1){
    course.lessons.forEach(function(arrayItem){
      chapters.push(arrayItem.chapter)
    })
  }
  let unique=[... new Set(chapters)]

  let display={}
  let all=[]

    if(course!=undefined&& course.lessons!=undefined && course.lessons.length>1){
      course.lessons.forEach(function(arrayItem){
        var newOne=Object.assign({},

               {name: arrayItem.chapter},
               {value: arrayItem.title}
           );
         all.push(newOne)

      })
    }
console.log(all)
var output = [];

all.forEach(function(item) {
  var existing = output.filter(function(v, i) {
    return v.name == item.name;
  });
  if (existing.length) {
    var existingIndex = output.indexOf(existing[0]);
    output[existingIndex].value = output[existingIndex].value.concat(item.value);
  } else {
    if (typeof item.value == 'string')
      item.value = [item.value];
    output.push(item);
  }
});

console.log(output);


  const classes = useStyles();
  return (
    <div className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            <ListItem disableGutters>
              <ListItemAvatar className={classes.listItemAvatar}>
                <IconAlternate
                  fontIconClass={data.icon}
                  size="medium"
                  color={data.color}
                  shape="circle"
                />
              </ListItemAvatar>
              <ListItemText
                primary={'Itt vannak az óráid'}
                secondary={'Ha módosítani kell kattins a sárga gombra fent'}
                primaryTypographyProps={{
                  variant: 'h6',
                }}
                secondaryTypographyProps={{
                  variant: 'h6',
                }}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                className={classes.listItemText}
                primary="Ide is írjak valamit"
                secondary={`Ennyi órá`}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textSecondary',
                }}
                secondaryTypographyProps={{
                  variant: 'body1',
                  className: classes.answerCount,
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.accordionGrid}>
          <Accordion
            items={output}
            titleProps={{
              variant: 'subtitle1',
              className: classes.fontWeightBold,
            }}
            subtitleProps={{
              className: classes.fontWeight300,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Questions.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Questions;

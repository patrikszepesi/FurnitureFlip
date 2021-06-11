import React, { useState, useEffect, createElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import { Section, SectionAlternate } from '../../../components/organisms';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';

import { Button, Menu, Avatar } from "antd";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import { colors } from '@material-ui/core';
import {
  PlayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {
  Grid
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const { Item } = Menu;

const VideoListView = () => {
  const [clicked, setClicked] = useState(-1);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoId,setVideoId]=useState('')
  const [content,setContent]=useState('')
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });
  const [completedLessons, setCompletedLessons] = useState([]);
  // force state update
  const [updateState, setUpdateState] = useState(false);
  const classes = useStyles();
console.log(clicked)
  // router
  const router = useRouter();
  const { slug } = router.query;
  let foo=['nincs','Mi az','enm']
  console.log(completedLessons)


  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

  useEffect(() => {
    if (course) loadCompletedLessons();
  }, [course]);
//if includesitem.id
  const loadCourse = async () => {
    const { data } = await axios.get(`/api/user/course/${slug}`);
    setCourse(data);
  };

  const loadCompletedLessons = async () => {
    const { data } = await axios.post(`/api/list-completed`, {
      courseId: course._id,
    });
    console.log("COMPLETED LESSONS => ", data);
    setCompletedLessons(data);
  };

  const markCompleted = async () => {
    const { data } = await axios.post(`/api/mark-completed`, {
      courseId: course._id,
      lessonId: videoId,
      title:videoTitle
    });
    console.log(data);
    setCompletedLessons([...completedLessons, videoTitle]);
  };
  console.log(completedLessons)



  const markIncompleted = async () => {
    try {
      const { data } = await axios.post(`/api/mark-incomplete`, {
        courseId: course._id,
        lessonId: videoId,
        title:videoTitle
      });
      console.log(data);
      const all = completedLessons;
      console.log("ALL => ", all);
      const index = all.indexOf(videoTitle);
      console.log(index)
      if (index > -1) {
        all.splice(index, 1);
        console.log("ALL WITHOUT REMOVED => ", all);
        setCompletedLessons(all);
        setUpdateState(!updateState);
      }
    } catch (err) {
      console.log(err);
    }
  };


let chapters=[]
if(course!=undefined&& course.lessons!=undefined && course.lessons.length>1){
  course.lessons.forEach(function(arrayItem){
    chapters.push(arrayItem.chapter)
  })
}
let unique=[... new Set(chapters)]

let all=[]

  if(course!=undefined&& course.lessons!=undefined && course.lessons.length>1){
    course.lessons.forEach(function(arrayItem){
      var newOne=Object.assign({},

             {name: arrayItem.chapter},
             {value: arrayItem.title},

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


let d= -1
let a;


let every=[]
if(course!=undefined&& course.lessons!=undefined && course.lessons.length>1){
  course.lessons.forEach(function(arrayItem){
    var objWithInfo=Object.assign({},

           {arrayItem: arrayItem.title},
           {counter: arrayItem.counter},
           {video:arrayItem.video  },
           {id:arrayItem._id},
           {content:arrayItem.content}
       );
     every.push(objWithInfo)

  })
}
console.log(every)


const assignVideoItems = async (item) => {
  console.log(item)


  let obj = every.find(o => o.arrayItem ===  item);


  setClicked(obj.video)
  setVideoTitle(obj.arrayItem)
  setVideoId(obj.id)
  setContent(obj.content)
  console.log(obj.video)

};


  return (
    <StudentRoute>
      <div className="row">
      <div className="col mt-4">
        {clicked !== -1 ? (
          <>
            <div className="col alert square">
              <b>{videoTitle.substring(0, 30)}</b>
            </div>

            {clicked &&
            clicked.Location && (
                <>
                  <div className="wrapper">
                    <ReactPlayer
                      className="player"
                      url={clicked.Location}
                      width="100%"
                      height="100%"
                      controls
                      onEnded={() => markCompleted()}
                      config={{
                          file: {
                            attributes: {
                              onContextMenu: e => e.preventDefault(),
                              controlsList: 'nodownload'
                            }
                          }
                        }}
                    />
                  </div>
                </>
              )}

            <ReactMarkdown
              source={content}
              className="single-post"
            />
          </>
        ) : (
          <div className="d-flex justify-content-center p-5">
            <div className="text-center p-5">
              <PlayCircleOutlined className="text-primary display-1 p-5" />
              <p className="lead">Clcik on the lessons to start learning</p>
            </div>
          </div>
        )}
      </div>
        <div style={{ maWidth: 320 }}>
          <Button
            onClick={() => setCollapsed(!collapsed)}
            className="text-primary mt-1 btn-block mb-2"
          >
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}{" "}
            {!collapsed && "Lessons"}
          </Button>
          <Menu
        defaultSelectedKeys={[clicked]}
        inlineCollapsed={collapsed}
        style={{ height: "80vh", overflow: "scroll",width:"50vh" }}

      >
        {output.map((lesson, index) => (

          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >  <Grid
            container
            spacing={0}
            className="accorion__item-text-container"
          >
            <Grid item xs={12} className="accorion__item-title-container">
              <Typography
                variant="h6"
                color="textPrimary"
                className="accorion_item-title"

              >
              </Typography>
            </Grid>
            {lesson && (
              <Grid item xs={12} className="accorion_item-subtitle-container ">
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className="accorion_item-subtitle"
                >
                <Box fontWeight="fontWeightBold" m={1}>
                {lesson.name}
                </Box>
                </Typography>
              </Grid>
            )}
          </Grid>

        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="text-primary  btn-block " aria-controls="additional-actions1-content" color="textSecondary">

            <Grid
              container
              spacing={0}
              className="accordion__collapsable-text-container"
            >
              { lesson &&  lesson.value.map((item,index) => (
                <Grid
                  item
                  xs={12}
                  className="accordion__collapsable-link-wrapper"
                >
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className="accorion_item-subtitle"
                  key={item}
                  onClick={() => assignVideoItems(item)}
                >

                <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                  {completedLessons.includes(item)   ? (
                    <CheckCircleIcon onClick={markIncompleted} />
                  ) : (
                        <PanoramaFishEyeIcon onClick={markCompleted}/>
                  )}
                    <ListItemText className="mt-2 mb-2 mr-2 ml-2" primary={item}/>
                      {<PlayCircleOutlineIcon  />}
                  </ListItem>
                </List>

                </div>


                </Typography>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </AccordionDetails>

      </Accordion>

        ))}
      </Menu>
        </div>
      </div>
    </StudentRoute>
  );
};

export default VideoListView;

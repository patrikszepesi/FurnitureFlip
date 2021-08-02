import React,{useState,useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { Context } from "../../../../../context";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';
import RatingModal from "../../../../../components/modal/RatingModal";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AnswerModal from "../../../../../components/modal/AnswerModal";
import toast, { Toaster } from 'react-hot-toast';



const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: 550,
    margin: `0 auto`,
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const Form = props => {
  const { className,item, ...rest } = props;
  const classes = useStyles();

  let [answerObj, setAnswerObj] = useState({
    text:'',
    name:'',
    commentId:0
  });

  const { state, dispatch } = useContext(Context);
  const { user,backendCallAnswer,backendCall } = state;

  const [comments,setComments]=useState([]);
  const [answers,setAnswers]=useState([]);



  let [commentObj, setCommentObj] = useState({
    text:'',
    name:''
  });

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const backendCallFalseAnswer = () => {
  dispatch({
    type: "SET_BACKEND_CALL_ANSWER_FALSE",
  });
};

const backendCallFalse = () => {
dispatch({
  type: "SET_BACKEND_CALL_FALSE",
});
};

const sendAnswerToBackend = async() => {
  setTimeout(backendCallFalseAnswer,0);
const { data } = await axios.post(`/api/comment/answer/${item._id}`,{
  toSend:{...answerObj},
  });
};

  const handleAnswerChange = async (event,name, value,id,commentId) => {
    event.preventDefault()
    let newValue = value;

    const newAnswerObj = { ...answerObj, [name]: event.target.value, [commentId]:id };

    setAnswerObj(newAnswerObj)
  };

  if(backendCallAnswer===true){
      if(answerObj.text.length>2 ){
        sendAnswerToBackend();
        toast("Siker!Hamarosan látni fogod a válaszodat", {
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
      });
    }  else if(answerObj.text.length<3 ){
        toast("Hiba, kitöltötted az összes mezőt shaped?", {
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
      });
        backendCallFalseAnswer();
      }
    }
    const handleRatingChange = async (event,name, value) => {

      event.preventDefault()
      let newValue = value;

      const newRatingObj = { ...commentObj, [name]: event.target.value };
      console.log(newRatingObj)

      setCommentObj(newRatingObj)
    };

  useEffect(()=>{
    loadComments()
  },[item])

const loadComments = async () => {
  const { data } = await axios.get(`/api/comments/${item._id}`);
  setComments(data)
}
let commentsToDisplay=[];
let answersToComments=[]
let ids=[]

if(comments && comments!=undefined && comments.item!=undefined && comments.item.comments!=undefined){
  var result = comments.item.comments.map(item => ({ text: item.text, answer: item.answer, id:item._id }));
  }

let textToSend
if(user && item.instructor!=undefined){
  if(user._id==item.instructor._id) textToSend='válaszolj'
}else {
  textToSend=''
}
const sendCommentToBackend = async() => {
  setTimeout(backendCallFalse,0);

const { data } = await axios.post(`/api/comments/${item._id}`,{
  toSend:{...commentObj},
  user:user,
});
};

if(backendCall===true){
    if(commentObj.text.length>2){
      sendCommentToBackend();
      toast("Siker!Hamarosan látni fogod a kérdésedet", {
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
    });
    } else if(commentObj.text.length<2 ){
      toast("Hiba, kitöltötted az összes mezőt?asdfasd", {
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
    });
     backendCallFalse();

     }

  }

  return (
    <>
    <Toaster/>
    <div className={className} {...rest}>
      <SectionHeader
        title="Kérdésed van?"
        subtitle="Jelentkezz be, kérdezz az eladótól bármit, és emailben értesítűnk, ha jött válasz"
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>



          <Grid item container justify="center" xs={12}>
          <RatingModal  course={item} text={'Kérdezz'} >

        <textarea style={{marginBottom:'10px'}}
              value= {commentObj.text}
              onChange={(event, value) => {
                handleRatingChange(event,'text',event.target.value)}}
              className='form-control'
              placeholder='Írd ide a kérdésed'
              rows={10}
              cols={50}>
        </textarea>
        </RatingModal>
          </Grid>
        </Grid>
      </div>
    </div>

    { result &&  result.map((comment,index) => (

      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{comment.text} </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Válasz : { comment.answer } <hr/> { user && item.instructor!=undefined && user._id==item.instructor._id &&  <AnswerModal  course={item} text={textToSend} >
                  <textarea style={{marginBottom:'10px'}}
                        value= {answerObj.text}
                        onChange={(event, value) => {
                          handleAnswerChange(event,'text',event.target.value,comment.id,'commentId')}}
                        className='form-control'
                        placeholder='Írd ide a válaszodat a kérdésre'
                        rows={10}
                        cols={50}>
                  </textarea>
              </AnswerModal>}
                </Typography>
              </AccordionDetails>
            </Accordion>

    ))}
      </>
  );
};

Form.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Form;

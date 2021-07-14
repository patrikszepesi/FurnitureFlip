import React,{useEffect,useState,useContext} from 'react';
import clsx from 'clsx';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section } from '../../../components/organisms';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMediaQuery, Button, Typography,Grid, ListItem, ListItemAvatar,colors } from '@material-ui/core';
import { Context } from "../../../context";
import AnswerModal from "../../../components/modal/AnswerModal";
import toast, { Toaster } from 'react-hot-toast';





const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  hero: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    maxWidth: theme.layout.contentWidth,
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  heroLeftSide: {

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 8),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2),
    },


  },
  heroRightSide: {
    maxWidth: '50%',
    flex: '0 0 50%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flex: '0 0 100%',

    },
  },
  heroCover: {
    position: 'relative',
    width: '50vw',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },//
  heroImageContainer: {
    height: '100%',
    width: '100%',
    minHeight:'100%!important',
    maxHeight:'100%!important',
    alignItems: 'center', /* vertical */
    justifyContent: 'center', /* horizontal */

  },
  heroImage: {
    marginTop:theme.spacing(3),
    //marginLeft:theme.spacing(),
    left: '0%',
    width: '100%',
    maxHeight: '100%',


    clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
  },
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShaped = props => {
  const { leftSide, rightSide, item,className, ...rest } = props;

  let [answerObj, setAnswerObj] = useState({
    text:'',
    name:'',
    commentId:0
  });

  const { state, dispatch } = useContext(Context);
  const { user,backendCallAnswer } = state;

  const [answers,setAnswers]=useState([]);
  const [comments,setComments]=useState([]);


  const backendCallFalse = () => {
  dispatch({
    type: "SET_BACKEND_CALL_ANSWER_FALSE",
  });
};

const sendAnswerToBackend = async() => {
  setTimeout(backendCallFalse,0);
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
//
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
        backendCallFalse();
      }
    }


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
console.log(user)
console.log(item)

  const classes = useStyles();

  return (
    <>
    <Toaster />
    <div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
      <div className={clsx('hero-shaped__wrapper', classes.hero)}>
        <Section
          className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
        >

          {leftSide}
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
        </Section>
        <div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
          <div className={clsx('hero-shaped__cover', classes.heroCover)}>
            <div
              className={clsx(
                'hero-shaped__image-container',
                classes.heroImageContainer,
              )}
            >
              <div className={clsx('hero-shaped__image', classes.heroImage)}>
                {rightSide}
              </div>

              <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>Termék leírás</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          {item.description}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>


            </div>

          </div>

        </div>
      </div>

      <Divider />
    </div>
    </>
  );
};
//
HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section right side
   */
  rightSide: PropTypes.node.isRequired,
  /**
   * Children to placed inside the section left side
   */
  leftSide: PropTypes.node.isRequired,
};
export default HeroShaped;

import {useState,useEffect} from 'react'
import SingleCourse from "../../pages/course/[slug]";
import { currencyFormatter,objMapper, starMapper } from "../../utils/helpers";
import { Badge, Modal, Button } from "antd";
import ReactPlayer from "react-player";
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
import RatingModal from "../modal/RatingModal";
import StarRating from "react-star-ratings";
import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios";


const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled,
  ratingObj,
  onRatingChange})=>{
  // destructure
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
    ratings,
    star
  } = course;


//
const [id,setId]=useState('')

  useEffect(() => {
   studentCount();
  // checkifAlreadyRated();
   //user2=JSON.parse(window.localStorage.getItem('user'))
  }, []);


  const studentCount = async () => {
    const { data } = await axios.post(`/api/instructor/student-count`, {
      courseId: course._id,
    });
    console.log("STUDENT COUNT => ", data);
    setStudents(data.length);
  };

  // const checkifAlreadyRated = async () => {
  //   const { data } = await axios.get(`/api/course/check/${course._id}/${user2._id}`);
  //
  //   setId(data);
  //   console.log(data)
  // };

const [value,setValue]=useState(2)//i dont think i need this
const [students, setStudents] = useState(0);

  const handleRatingChange = (event,name, value) => {
    event.preventDefault()
    let newValue = value;


    const newRatingObj = { ...ratingObj, [name]: newValue };


      if (name === 'star') {

         if(ratings.length<1 ){
           //default value of rating when created is 5, so if there no other rating besides this, we need to get the average of 5 and this value
           newRatingObj.average = (value+5)/2
         } else {
           newRatingObj.average = (objMapper(ratings)+value)/(ratings.length+1)
           console.log(newRatingObj)
         }
        //newRatingObj.star=ratings.getAverage(ObjMapper(ratings+ value))
          onRatingChange(newRatingObj);


      } else {
        onRatingChange(newRatingObj);
        console.log(newRatingObj)
      }

  };



  return (
    <div className="jumbotron bg-primary square">
      <div className="row">
        <div className="col-md-8">

          {/* title */}
          <h1 className="text-light font-weight-bold">{name}</h1>
          {/* description */}
          <p className="lead">
            {description && description.substring(0, 160)}...
          </p>
          {/* category */}
          <Badge
            count={category}
            style={{ backgroundColor: "#03a9f4" }}
            className="pb-4 mr-2"
          />
          {/* author */}
          <p>Created by {instructor.name}</p>
          {/* updated at */}
          <p>Last udpated {new Date(updatedAt).toLocaleDateString()}</p>
          {/* price */}
          <h4 className="text-light">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "Free"}
          </h4>
          <Rating
          size="medium"
          style={{ marginLeft:'35px' }}
          name="simple-controlled"
          value={star}
          precision={0.5}
          readOnly
        /><p className="font-weight-bold" style={{ marginTop:'-28px' }} >({star.toFixed(1)})</p>
        <p>{`Eddig ${students} ember vette meg ezt a kurzust `}</p>


        </div>

        <div className="col-md-4">
          {/* {JSON.stringify(lessons[0])} */}
          {/* show video preview or course image */}
          {lessons[0].video && lessons[0].video.Location ? (
            <div
              onClick={() => {
                setPreview(lessons[0].video.Location);
                setShowModal(!showModal);
              }}
            >
              <ReactPlayer
                className="react-player-div"
                url={lessons[0].video.Location}
                light={image.Location}
                width="100%"
                height="225px"
              />
            </div>
          ) : (
            <>
              <img src={image.Location} alt={name} className="img img-fluid" />
            </>
          )}
          {/* enroll button */}
          {loading ? (
            <div className="d-flex justify-content-center mt-3">
              <LoadingOutlined className="h1 text-danger" />
            </div>
          ) : (
            <Button
              className="mb-3 mt-3"
              type="danger"
              block
              shape="round"
              icon={<SafetyOutlined />}
              size="large"
              disabled={loading || !user}
              onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
            >
              {user
                ? enrolled.status
                  ? "Menj a kurzushoz"
                  : "Megveszem"
                : "Jelentkezz be,hogy megvehesd"}
            </Button>
          )}


          <RatingModal enrolled={enrolled} course={course} >
          <Rating
              name="simple-controlled"
              value={ratingObj.star}
              onChange={(event, value) => {
            handleRatingChange(event,'star',value);
          }}


              />

              <textarea style={{marginBottom:'10px'}}
                    value= {ratingObj.name}
                    onChange={(event, value) => {
                      handleRatingChange(event,'name',event.target.value)}}
                    className='form-control'
                    placeholder='Neved hogyan jelenjen meg az értékelésen'
                    rows={1}
                    cols={1}>
              </textarea>

              <textarea style={{marginBottom:'10px'}}
                    value= {ratingObj.text}
                    onChange={(event, value) => {
                      handleRatingChange(event,'text',event.target.value)}}
                    className='form-control'
                    placeholder='Milyen volt az Oktató és maga az óra'
                    rows={10}
                    cols={50}>
              </textarea>
          </RatingModal>

        </div>
      </div>

    </div>
  );
};

export default SingleCourseJumbotron;

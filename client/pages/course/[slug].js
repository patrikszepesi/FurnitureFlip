import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import Comments from "../../components/cards/Comments";
import { Context } from "../../context";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
// import {
//   postRating
// } from '../../services/course';

const SingleCourse = ({ course }) => {

  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});
  const [value, setValue] = useState(0);
  const [text, setText] = useState('');
  const [res, setRes]=useState(false);
  const [userFromLocal, setUserFromLocal]=useState('');

  let [ratingObj, setRatingObj] = useState({
    userToRate:'',
    text:'',
    star:0,
    name:''
  });

  // context


const { state, dispatch } = useContext(Context);

const { user,backendCall } = state;



let userToBackend;



const backendCallFalse = () => {
  dispatch({
    type: "SET_BACKEND_CALL_FALSE",
  });
};

useEffect(() => {
 //setUserFromLocal(JSON.parse(window.localStorage.getItem('user')));
 ratingObj={...ratingObj.userToRate=JSON.parse(window.localStorage.getItem('user'))}

}, []);



console.log(userFromLocal)
console.log("after")


console.log(ratingObj.text.length);


  useEffect(() => {
    if (user && course) checkEnrollment();
  }, [user, course]);

  const sendRatingToBackend = async() => {
    setTimeout(backendCallFalse,0);

  const { data } = await axios.post(`/api/ratings/${course._id}`,{
    toSend:{...ratingObj}
  });


  };

//set to true on onOk which made the backendCall true which triggered sendRatingToBackend which triggerered settimeout, but that got put on the callback queu so in the meantime yoo ran and after it ran backendCall could be set to false, then obvisouly yo could run again
  if(backendCall===true){
    if(ratingObj.text.length>2 && ratingObj.star>0 && ratingObj.name.length>3){
      sendRatingToBackend();
      toast.success("siker")
    }  else if(ratingObj.text.length<3 || ratingObj.name.length<3 || ratingObj.star<0){
      toast.success('Hiba, kitöltötted az összes mezőt?')
      backendCallFalse();
    }

  }






  const checkEnrollment = async () => {
    const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
    console.log("CHECK ENROLLMENT", data);
    setEnrolled(data);
  };

  const router = useRouter();
  const { slug } = router.query;


console.log("yoooo")



  const handlePaidEnrollment = async () => {
    try {
      setLoading(true);
      // check if user is logged in
      if (!user) router.push("/login");
      // check if already enrolled
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`);
      const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async (e) => {
    // console.log("handle free enrollment");
    e.preventDefault();
    try {
      // check if user is logged in
      if (!user) router.push("/login");
      // check if already enrolled
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.course.slug}`);
      setLoading(true);
      const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
      toast(data.message);
      setLoading(false);
      router.push(`/user/course/${data.course.slug}`);
    } catch (err) {
      toast("Enrollment failed. Try again.");
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>


      <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
        user={user}
        loading={loading}
        handlePaidEnrollment={handlePaidEnrollment}
        handleFreeEnrollment={handleFreeEnrollment}
        enrolled={enrolled}
        setEnrolled={setEnrolled}
        ratingObj={ratingObj}
        onRatingChange={newRatingObj => setRatingObj(newRatingObj)}
      />

      <PreviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
      />


      {course.lessons && (
        <SingleCourseLessons
          lessons={course.lessons}
          setPreview={setPreview}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}

      <Comments
        course={course}
        user={user}
      />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data,
    },
  };
}

export default SingleCourse;

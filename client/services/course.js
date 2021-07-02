import axios from 'axios';

export const fetchCoursesByFilter = async(arg) =>
  await axios.post("api/search/filters", {arg},);


//send user info too to see if he has enrolleddd
export const postRating = async(arg) =>
  await axios.post(`${process.env.API}/course/${arg}`, arg);

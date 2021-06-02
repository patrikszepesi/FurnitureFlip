import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import Search from '../components/forms/Search';
import {
  fetchCoursesByFilter
} from '../services/course';

const Index = ({ courses }) => {
  const [ coursesAfterSearch,setCoursesAfterSearch]=useState([])
  const [filterObj, setFilterObj] = useState({
    category: '',
    difficulty: '',
    star:'',
    average:null
  });



  const fetchProperties = arg => {
    fetchCoursesByFilter(arg).then(res => {
      setCoursesAfterSearch(res.data);
      //setCoursesCount(res.data.length);
    });
  };
  //crashes bc backend is not done
  useEffect(() => {
      fetchProperties({
      toSend: { ...filterObj/*, page: currentPage*/ }
      });
    }, [filterObj, /*currentPage*/]);


   return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        Oszd meg tudásod vagy tanulj másoktól bármikor bárhol
      </h1>
      <div className="col">
        <br />
        <Search
        filterObj={filterObj}
        onFilterChange={newFilterObj => setFilterObj(newFilterObj)}

         />
      </div>

      <div className="container-fluid">

        <div className="row">
          {coursesAfterSearch.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
// SEO practice, get courses ASAP, not only when component renders(useEffect) NOT USED NOW BC ONLY ONES THAT ARE PUBLISHED AS TRUE ARE RETURNED HERE
export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;

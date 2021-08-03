import { useContext, useState } from "react";
import { Context } from "../../../context";
import axios from "axios";

import { toast } from "react-toastify";
import { Community } from './components';
import { Section } from '../../../components/organisms';




const BecomeSellerView = () => {
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeInstructor = () => {
    // console.log("become instructor");
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Hiba");
        setLoading(false);
      });
  };


  return (
    <>

    <Section>
        <Community  />
      </Section>





    </>
  );
};

export default BecomeSellerView;

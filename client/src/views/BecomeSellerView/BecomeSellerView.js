import { useContext, useState } from "react";
import { Context } from "../../../context";
import { Button } from "antd";
import axios from "axios";
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../../components/routes/UserRoute";
import { Community } from './components';
import { Section } from '../../../components/organisms';
import myImage from '../../../public/assets/rev.svg'




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
        toast("Stripe onboarding failed. Try again.");
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

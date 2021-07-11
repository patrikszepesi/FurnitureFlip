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
   const community = [
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
    },
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
    },
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
    },
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x',
    },
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x',
    },
  },
  {
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x',
    },
  },
];

  return (
    <>

    <Section>
        <Community data={community} />
      </Section>





    </>
  );
};

export default BecomeSellerView;

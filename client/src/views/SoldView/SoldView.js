import { useState, useEffect} from "react";
import axios from "axios";
//import InstructorRoute from "../../../components/routes/InstructorRoute";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Section, SectionAlternate } from '../../../components/organisms';

import {
  Items,
} from './components';

const SoldView = () => {
  const [items, setItems] = useState([]);
  const [wishlist,setWishlist]=useState();

  useEffect(() => {
    loadCourses();
  }, [wishlist]);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/sold");
    setItems(data);
  };


  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  return (
    <>{items &&   <SectionAlternate>
        <Items
         data={items}
         onWishListChange={newWishList => setWishlist(newWishList)}
          />
      </SectionAlternate> }



    </>
  );
};

export default SoldView;

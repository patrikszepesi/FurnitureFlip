import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Section, SectionAlternate } from '../../../components/organisms';

import {
  Items,
} from './components';

const ItemsView = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructor-courses");
    setItems(data);
  };

  const myStyle = { marginTop: "-15px", fontSize: "10px" };

  return (
    <InstructorRoute>
      <SectionAlternate>
        <Items data={items} />
      </SectionAlternate>


    </InstructorRoute>
  );
};

export default ItemsView;

import React, { useState,useEffect } from "react";
import { DatePicker, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import Link from 'next/link'


const { Option } = Select;



const Search = ({filterObj,onFilterChange}) => {

  const [courses, setCourses] = useState("");
  const [coursesCount, setCoursesCount] = useState("");
  console.log(courses)


  const categories=["pénzügy","számvitel","programozás","mesterséges intelligencia","Microsoft Excel","egyéb informatika","design","marketing","életmód","fotózás","zene","matematika","statisztika","kémia","biológia","anatómia","egyéb"]
  const difficulties=['kezdő','haladó','profi']
  const stars=[2,2.5,3,3.5,4,4.5,5]

  const handleFilterChange = (name, value) => {
    let newValue = value;

    const newFilterObj = { ...filterObj, [name]: newValue };

    // debounce for price change
    if (name === 'price') {
      setPrice(newFilterObj.price);
      debouncedSave(newFilterObj);
    } else {
      onFilterChange(newFilterObj);
    }
  };


  return (
    <div className="d-flex pb-4">
      <div className="w-100">
      <Select
        value={filterObj.category}
        onChange={value => handleFilterChange('category', value)}
        className="w-100"
        size="large"
        placeholder="Kategória"
        options={categories.map(c => ({
      label: c.toUpperCase(),
      value: c
    }))}
      >
      </Select>
      </div>

      <div className="w-100">
      <Select
        value={filterObj.difficulty}
        onChange={value => handleFilterChange('difficulty', value)}
        className="w-100"
        size="large"
        placeholder="Nehézség"
        options={difficulties.map(d => ({
      label: d.toUpperCase(),
      value: d
    }))}
      >
      </Select>
      </div>

      <div className="w-100">
      <Select
        value={filterObj.star}
        onChange={value => handleFilterChange('star', value)}
        className="w-100"
        size="large"
        placeholder="Csillagok"
        options={stars.map(s => ({
      label: s,
      value: s
    }))}
      >
      </Select>

      </div>
    </div>
  );
};

export default Search;

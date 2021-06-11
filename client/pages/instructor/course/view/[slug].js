import React from 'react';
import CourseView from '../../../../src/views/CourseView';
import Main from '../../../../src/layouts/Main';
import WithLayout from '../../../../src/WithLayout';
const CourseViewForInstructor = () => {
  return (
    <WithLayout
      component={CourseView}
      layout={Main}
    />
  )
};

export default CourseViewForInstructor;

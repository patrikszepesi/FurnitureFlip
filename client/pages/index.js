import React from 'react';
import CourseListView from '../src/views/CourseListView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Index = () => {
  return (
    <WithLayout
      component={CourseListView}
      layout={Main}
    />
  )
};

export default Index;

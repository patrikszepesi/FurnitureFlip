import React from 'react';
import VideoListView from '../../../src/views/VideoListView';
import Main from '../../../src/layouts/Main';
import WithLayout from '../../../src/WithLayout';
const CourseViewForStudent = () => {
  return (
    <WithLayout
      component={VideoListView}
      layout={Main}
    />
  )
};

export default CourseViewForStudent;

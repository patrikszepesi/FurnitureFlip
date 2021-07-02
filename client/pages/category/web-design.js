import React from 'react';
import CategoryView from '../../src/views/Categories/CategoryView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const WebDesign = () => {
  return (
    <WithLayout
      component={CategoryView}
      layout={Main}
    />
  )
};

export default WebDesign;
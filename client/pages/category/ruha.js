import React from 'react';
import CategoryClothingView from '../../src/views/Categories/CategoryClothingView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Clothing = () => {
  return (
    <WithLayout
      component={CategoryClothingView}
      layout={Main}
    />
  )
};

export default Clothing;

import React from 'react';
import CategoryFurnitureView from '../../src/views/Categories/CategoryFurnitureView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Furniture = () => {
  return (
    <WithLayout
      component={CategoryFurnitureView}
      layout={Main}
    />
  )
};

export default Furniture;

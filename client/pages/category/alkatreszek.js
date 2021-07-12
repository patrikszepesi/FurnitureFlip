import React from 'react';
import CategoryPartsView from '../../src/views/Categories/CategoryPartsView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Parts = () => {
  return (
    <WithLayout
      component={CategoryPartsView}
      layout={Main}
    />
  )
};

export default Parts;

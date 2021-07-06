import React from 'react';
import SoldView from '../../src/views/SoldView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Sold = () => {
  return (
    <WithLayout
      component={SoldView}
      layout={Main}
    />
  )
};

export default Sold;

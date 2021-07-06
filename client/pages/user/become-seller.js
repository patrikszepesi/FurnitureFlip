import React from 'react';
import BecomeSellerView from '../../src/views/BecomeSellerView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const BecomeSeller = () => {
  return (
    <WithLayout
      component={BecomeSellerView}
      layout={Main}
    />
  )
};

export default BecomeSeller;

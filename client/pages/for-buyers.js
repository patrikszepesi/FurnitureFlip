import React from 'react';
import ForBuyersView from '../src/views/ForBuyersView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const WhatForBuyers = () => {
  return (
    <WithLayout
      component={ForBuyersView}
      layout={Main}
    />
  )
};

export default WhatForBuyers;

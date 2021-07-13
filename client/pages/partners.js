import React from 'react';
import PartnerView from '../src/views/PartnerView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Partner = () => {
  return (
    <WithLayout
      component={PartnerView}
      layout={Main}
    />
  )
};

export default Partner;

import React from 'react';
import ZeroView from '../src/views/ZeroView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const ZeroW = () => {
  return (
    <WithLayout
      component={ZeroView}
      layout={Main}
    />
  )
};

export default ZeroW;

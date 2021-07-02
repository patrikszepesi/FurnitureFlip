import React from 'react';
import IncomeView from '../../src/views/IncomeView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Revenue = () => {
  return (
    <WithLayout
      component={IncomeView}
      layout={Main}
    />
  )
};

export default Revenue;

import React from 'react';
import CategorySportView from '../../src/views/Categories/CategorySportView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Sport = () => {
  return (
    <WithLayout
      component={CategorySportView}
      layout={Main}
    />
  )
};

export default Sport;

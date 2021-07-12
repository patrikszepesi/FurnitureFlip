import React from 'react';
import CategoryBabyView from '../../src/views/Categories/CategoryBabyView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Baby = () => {
  return (
    <WithLayout
      component={CategoryBabyView}
      layout={Main}
    />
  )
};

export default Baby;

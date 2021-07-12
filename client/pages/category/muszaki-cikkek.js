import React from 'react';
import CategoryElectronicsView from '../../src/views/Categories/CategoryElectronicsView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Electronics = () => {
  return (
    <WithLayout
      component={CategoryElectronicsView}
      layout={Main}
    />
  )
};

export default Electronics;

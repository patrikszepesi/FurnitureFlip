import React from 'react';
import ItemsView from '../../src/views/ItemsView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Index = () => {
  return (
    <WithLayout
      component={ItemsView}
      layout={Main}
    />
  )
};

export default Index;

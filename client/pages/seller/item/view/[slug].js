import React from 'react';
import ItemView from '../../../../src/views/ItemView';
import Main from '../../../../src/layouts/Main';
import WithLayout from '../../../../src/WithLayout';
const ItemViewForSeller = () => {
  return (
    <WithLayout
      component={ItemView}
      layout={Main}
    />
  )
};

export default ItemViewForSeller;

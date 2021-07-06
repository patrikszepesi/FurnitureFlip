import React from 'react';
import WishListView from '../../src/views/WishListView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const WishList = () => {
  return (
    <WithLayout
      component={WishListView}
      layout={Main}
    />
  )
};

export default WishList;

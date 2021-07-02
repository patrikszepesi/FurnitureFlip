import React from 'react';
import BuyerDashboardView from '../../src/views/BuyerDashboardView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const UserDashboard = () => {
  return (
    <WithLayout
      component={BuyerDashboardView}
      layout={Main}
    />
  )
};

export default UserDashboard;

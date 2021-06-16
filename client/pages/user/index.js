import React from 'react';
import StudentDashboardView from '../../src/views/StudentDashboardView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const UserDashboard = () => {
  return (
    <WithLayout
      component={StudentDashboardView}
      layout={Main}
    />
  )
};

export default UserDashboard;

import React from 'react';
import SetUpView from '../src/views/SetUpView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Help = () => {
  return (
    <WithLayout
      component={SetUpView}
      layout={Main}
    />
  )
};

export default Help;

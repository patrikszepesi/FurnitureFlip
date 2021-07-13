import React from 'react';
import RulesView from '../src/views/RulesView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Rules = () => {
  return (
    <WithLayout
      component={RulesView}
      layout={Main}
    />
  )
};

export default Rules;

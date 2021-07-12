import React from 'react';
import WhatView from '../src/views/WhatView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const What = () => {
  return (
    <WithLayout
      component={WhatView}
      layout={Main}
    />
  )
};

export default What;

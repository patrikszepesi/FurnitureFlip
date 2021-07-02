import React from 'react';
import ItemCreateView from '../../../src/views/ItemCreateView';
import Main from '../../../src/layouts/Main';
import WithLayout from '../../../src/WithLayout';
const Create = () => {
  return (
    <WithLayout
      component={ItemCreateView}
      layout={Main}
    />
  )
};

export default Create;

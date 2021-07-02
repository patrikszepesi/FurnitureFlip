import React from 'react';
import ItemEditView from '../../../../src/views/ItemEditView';
import Main from '../../../../src/layouts/Main';
import WithLayout from '../../../../src/WithLayout';
const Edit = () => {
  return (
    <WithLayout
      component={ItemEditView}
      layout={Main}
    />
  )
};

export default Edit;

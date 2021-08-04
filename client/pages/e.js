import React from 'react';
import HandleInvoicesView from '../src/views/HandleInvoicesView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const HandleInvoices = () => {
  return (
    <WithLayout
      component={HandleInvoicesView}
      layout={Main}
    />
  )
};

export default HandleInvoices;

import React from 'react';
import AllInvoicesView from '../src/views/AllInvoicesView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const AllInvoices = () => {
  return (
    <WithLayout
      component={AllInvoicesView}
      layout={Main}
    />
  )
};

export default AllInvoices;

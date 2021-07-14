import React from 'react';
import InvoiceView from '../src/views/InvoiceView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Invoice = () => {
  return (
    <WithLayout
      component={InvoiceView}
      layout={Main}
    />
  )
};

export default Invoice;

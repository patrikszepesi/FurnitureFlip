import React from 'react';
import CategoryBookView from '../../src/views/Categories/CategoryBookView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Book = () => {
  return (
    <WithLayout
      component={CategoryBookView}
      layout={Main}
    />
  )
};

export default Book;

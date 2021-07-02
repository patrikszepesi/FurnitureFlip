import React from 'react';
import ChooseCategory from '../src/views/ChooseCategoryView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Categories = () => {
  return (
    <WithLayout
      component={ChooseCategory}
      layout={Main}
    />
  )
};

export default Categories;

import React from 'react';
import CategoryArtView from '../../src/views/Categories/CategoryArtView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
const Art = () => {
  return (
    <WithLayout
      component={CategoryArtView}
      layout={Main}
    />
  )
};

export default Art;

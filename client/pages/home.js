import React from 'react';
import IndexView from '../src/views/IndexView';
import Main from '../src/layouts/Main';
import WithLayout from '../src/WithLayout';
const Home = () => {
  return (
    <WithLayout
      component={IndexView}
      layout={Main}
    />
  )
};

export default Home;

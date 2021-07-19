import React from 'react';
import SingleItemView from '../../src/views/SingleItemView0';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
import { useRouter } from "next/router";
import axios from 'axios';

const SingleItem = ({data}) => {
  const router = useRouter();
  const { slug } = router.query;


  return (
    <WithLayout
      component={SingleItemView}
      layout={Main}
      item={data}
    />
  )
};

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);

  return { props: { data } }
}

export default SingleItem;

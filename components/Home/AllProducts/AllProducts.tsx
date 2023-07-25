'use client';

import { getAllProducts } from '@/utils/Fetcher';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const AllProducts = () => {
  const [data, setData] = useState([]);
  const category = useSelector((state: RootState) => state.category.category);

  useEffect(() => {
    const getData = async () => {
      const res = await getAllProducts(category);
      setData(res);
    };

    getData();
  }, [category]);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 py-10">
      {data.map((item: object, i: number) => (
        <Product info={item} key={i} />
      ))}
    </div>
  );
};

export default AllProducts;

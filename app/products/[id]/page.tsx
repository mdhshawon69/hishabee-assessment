'use client';

import { addToCart } from '@/store/slices/cartSlice';
import { getOneProduct } from '@/utils/Fetcher';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { RootState } from '@/store/store';

interface Product {
  image: string;
  title: string;
  price: string;
}

const ProductIndividualPage = () => {
  const [data, setData] = useState<Product>();
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const qty = useSelector((state: RootState) => state.cart.qty);

  console.log(cart);

  useEffect(() => {
    const getData = async () => {
      const data = await getOneProduct(id);
      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center gap-5 max-w-4xl m-auto shadow-2xl p-10 rounded-lg">
        <div className="basis-[40%]">
          <img
            src={data?.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold lg:text-xl text-sm">{data?.title}</h3>
          <p className="font-semibold text-blue-600 my-5 lg:text-md text-sm">
            ${data?.price}
          </p>
          <p className="text-sm lg:text-md">
            The offer is valid until April 3 or as long as stock lasts!
          </p>

          <button
            className="w-full text-white bg-blue-600 py-2 rounded-lg mt-5"
            onClick={() =>
              dispatch(addToCart({ product: data, quantity: qty }))
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductIndividualPage;

import Link from 'next/link';
import React from 'react';

const Product = ({ info }: any) => {
  return (
    <Link href={`/products/${info.id}`}>
      <div className="px-3 shadow-lg pb-5 rounded-lg min-h-96 flex flex-col justify-between">
        <img
          src={info.image}
          className="w-20 h-20 mx-auto object-contain rounded-xl"
          alt=""
        />
        <div>
          <h3 className="tex-xl font-bold my-3">{info.title}</h3>
          <div className="flex justify-between items-center">
            <p className="font-semibold">${info.price}</p>
            <p className="text-green-600">In stock</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;

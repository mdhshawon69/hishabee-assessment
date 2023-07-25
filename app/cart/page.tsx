'use client';

import { removeProduct, toggleProductQuantity } from '@/store/slices/cartSlice';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-lg mx-auto flex flex-col gap-3 ">
        {cart.map((item, i) => (
          <div
            className="bg-white p-3 rounded-lg shadow-xl flex justify-between items-center gap-3"
            key={i}
          >
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p>${item.price}</p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button
                className="text-lg w-5 h-5 rounded-full bg-blue-500 flex justify-center items-center"
                onClick={() =>
                  dispatch(toggleProductQuantity({ id: item.id, value: 'dec' }))
                }
              >
                -
              </button>
              <span className="text-xl">{item.quantity}</span>
              <button
                className="text-xl w-5 h-5 rounded-full bg-blue-500 flex justify-center items-center"
                onClick={() =>
                  dispatch(toggleProductQuantity({ id: item.id, value: 'inc' }))
                }
              >
                +
              </button>
            </div>

            <div>
              <button
                className="bg-red-500 p-1 rounded-md text-white"
                onClick={() => dispatch(removeProduct({ id: item.id }))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;

'use client';

import { addCategory } from '@/store/slices/categorySlice';
import { RootState } from '@/store/store';
import { getAllCategories } from '@/utils/Fetcher';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const category = useSelector((state: RootState) => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    getData();
  }, []);
  return (
    <div className="bg-gray-300 py-2 text-right px-5">
      <select
        ref={categoryRef}
        className="p-2"
        onChange={() =>
          dispatch(addCategory({ category: categoryRef.current?.value }))
        }
      >
        <option selected disabled>
          Select a Category
        </option>
        {categories.map((item, i) => (
          <option
            selected={category === item ? true : false}
            value={item}
            key={i}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

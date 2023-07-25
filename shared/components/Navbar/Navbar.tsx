import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-20 bg-blue-500 px-5 max-w-[1200px] mx-auto flex justify-between items-center">
      <div>
        <h1 className="font-bold text-2xl text-white">MiniCommerce</h1>
      </div>
      <ul className="flex justify-center items-center gap-3 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

export const getAllProducts = async (category: string) => {
  if (category) {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return res.json();
  } else {
    const res = await fetch(`https://fakestoreapi.com/products`);
    return res.json();
  }
};

export const getAllCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) {
    throw new Error('falied to fetch products');
  }
  return res.json();
};

export const getOneProduct = async (id: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('falied to fetch products');
  }
  return res.json();
};

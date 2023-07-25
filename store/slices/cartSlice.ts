import { createSlice } from '@reduxjs/toolkit';
interface CartState {
  cart: any[];
  qty: number;
}

const initialState: CartState = {
  cart: [],
  qty: 1,
};

console.log(initialState);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.product;
      const quantity = action.payload.quantity;

      const checkProductInCart = state.cart.find(
        (item) => item.id === product.id
      );

      if (checkProductInCart) {
        checkProductInCart.quantity += quantity;
      } else {
        state.cart = [...state.cart, { ...product, quantity }];
      }
      state.qty = 1;
    },

    toggleProductQuantity: (state, action) => {
      const id = action.payload.id;
      const value = action.payload.value;

      const foundProduct = state.cart.find((item) => item.id === id);

      if (value === 'inc') {
        foundProduct.quantity++;
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          foundProduct.quantity--;
        }
      }
    },

    removeProduct: (state, action) => {
      const id = action.payload.id;
      const arrayAfterRemove = state.cart.filter((item) => item.id !== id);
      state.cart = arrayAfterRemove;
    },
  },
});

export const { addToCart, toggleProductQuantity, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;

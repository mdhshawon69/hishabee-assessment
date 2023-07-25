import { createSlice } from '@reduxjs/toolkit';

interface CategoryState {
  category: string;
}

const initialState: CategoryState = {
  category: '',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload.category;
    },
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;

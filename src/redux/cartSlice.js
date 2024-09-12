import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      item.quantity++;
      state.totalQuantity++;
      state.totalAmount += item.price;
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        item.quantity--;
      }
      state.totalQuantity--;
      state.totalAmount -= item.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

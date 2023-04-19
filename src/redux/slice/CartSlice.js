import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart/slice",
  initialState,
  reducers: {
    addToCart(state, action) {
      // const { id } = action.payload;
      const cartData = { ...action.payload, quantity: 1 };
      const index = state.cartItems.findIndex(
        (item) => item.id === cartData.id
      );

      if (index === -1) {
        state.cartItems.push(cartData);
      } else {
        const itemToUpdate = state.cartItems[index];
        itemToUpdate.quantity = ++itemToUpdate.quantity;
        state.totalPrice = state.totalPrice + itemToUpdate.price * 70;
        state.cartItems.splice(index, 1, itemToUpdate);
      }
    },
    removeFromCart(state, action) {
      const { id, price } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        const itemToUpdate = state.cartItems[index];
        if (itemToUpdate.quantity > 1) {
          itemToUpdate.quantity = --itemToUpdate.quantity;
          state.cartItems.splice(index, 1, itemToUpdate);
        } else {
          state.cartItems.splice(index, 1);
        }
        state.totalPrice = state.totalPrice - price * 70;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
    addPrice(state, action) {
      state.totalPrice = state.totalPrice + action.payload * 70;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, addPrice } =
  cartSlice.actions;
export default cartSlice.reducer;

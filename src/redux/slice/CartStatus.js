import { createSlice } from "@reduxjs/toolkit";

const cartStatus = createSlice({
  name: "cart",
  initialState: { isOpen: false },
  reducers: {
    setOpen(state) {
      state.isOpen = true;
    },
    setClose(state) {
      state.isOpen = false;
    },
  },
});

export const { setOpen, setClose } = cartStatus.actions;
export default cartStatus.reducer;

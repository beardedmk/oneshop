import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const UserSlice = createSlice({
  name: "user/slice",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { getUser } = UserSlice.actions;
export default UserSlice.reducer;

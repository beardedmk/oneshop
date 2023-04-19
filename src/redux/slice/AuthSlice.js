import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { token, id } = action.payload;
      localStorage.setItem("authToken", JSON.stringify({ token, id }));
      state.auth = token;
    },
  },
});
export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;

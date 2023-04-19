import { createSlice } from "@reduxjs/toolkit";

const StatusSlice = createSlice({
  name: "set/status",
  initialState: {
    status: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = StatusSlice.actions;
export default StatusSlice.reducer;

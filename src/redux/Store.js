import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSlice";
import statusReducer from "./slice/StatusSlice";
import cartReducer from "./slice/CartSlice";
import userReducer from "./slice/UserSlice";
import authReducer from "./slice/AuthSlice";
import cartStatusReducer from "./slice/CartStatus";
const store = configureStore({
  reducer: {
    status: statusReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    auth: authReducer,
    cartStatus: cartStatusReducer,
  },
});

export default store;

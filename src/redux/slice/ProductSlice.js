import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product/slice",
  initialState: {
    products: null,
    product: null,
    category: null,
    similar: null,
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    getProduct(state, action) {
      state.product = action.payload;
    },

    updateProduct(state, action) {},
    deleteProduct(state, action) {},
    productsCategories(state, action) {
      state.category = action.payload;
    },

    similarProducts(state, action) {
      state.similar = action.payload;
    },
  },
});

export const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  productsCategories,
  similarProducts,
} = ProductSlice.actions;
export default ProductSlice.reducer;

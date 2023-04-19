import axios from "axios";
import { setStatus } from "../slice/StatusSlice";
import {
  getProduct,
  getProducts,
  productsCategories,
  similarProducts,
} from "../slice/ProductSlice";
import {
  STATE_ERROR,
  STATE_SUCCESS,
  STATUS_FETCHING,
  STATUS_IDLE,
} from "../types";
import { getUser } from "../slice/UserSlice";
import { login } from "../slice/AuthSlice";

export const getProductsThunk = () => (dispatch, getState) => {
  axios
    .get(
      "https://dummyjson.com/products?select=title,price,category,thumbnail,discountPercentage"
    )
    .then((response) => {
      dispatch(setStatus(STATUS_FETCHING));
      dispatch(getProducts(response.data.products));
      dispatch(setStatus(STATE_SUCCESS));
      dispatch(setStatus(STATUS_IDLE));
    })
    .catch((error) => {
      dispatch(setStatus(STATE_ERROR));
      console.log("err:", error);
    });
};

//fetching Products Categories

export const productsCategoriesThunk = () => (dispatch) => {
  axios
    .get("https://dummyjson.com/products/categories")
    .then((res) => {
      dispatch(productsCategories(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

//fetch single product

export const getSingleProduct = (id) => (dispatch, state) => {
  axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      dispatch(setStatus(STATUS_FETCHING));
      dispatch(getProduct(response.data));
      dispatch(setStatus(STATE_SUCCESS));
      dispatch(setStatus(STATUS_IDLE));
    })
    .catch((error) => {
      dispatch(setStatus(error));
      console.log(error);
    });
};

//fetch product of same category

export const getCategoryProducts = (cat) => (dispatch, state) => {
  axios
    .get(`https://dummyjson.com/products/category/${cat}`)
    .then((response) => {
      dispatch(setStatus(STATUS_FETCHING));
      dispatch(similarProducts(response.data.products));
      dispatch(setStatus(STATUS_IDLE));
    })
    .catch((error) => {
      console.log(error);
    });
};

// fetch user

export const fetchUser = (id) => (dispatch) => {
  axios
    .get(
      `https://dummyjson.com/users/${id}?select=id,firstName,lastName,maidenName,email,phone,image,address`
    )
    .then((res) => {
      dispatch(getUser(res.data));
    })
    .catch((err) => console.log(err));
};

// user Auth (LOGIN)

export const authThunk = (loginDetail) => (dispatch) => {
  axios
    .post("https://dummyjson.com/auth/login", loginDetail)
    .then((response) => {
      dispatch(login(response.data));
      dispatch(fetchUser(response.data.id));
    })
    .catch((error) => console.log(error));
};

// SignUp

export const signUpThunk = (signupDetails) => (dispatch) => {
  axios
    .post("https://dummyjson.com/users/add", signupDetails)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// fetch search products
// export const fetchSearchProducts = (searchTerm) => (dipatch) => {
//   axios
//     .get(`https://dummyjson.com/products/search?q=${searchTerm}`)
//     .then((response) => {
//       console.log(response);
//     })
//     .then((error) => {
//       console.log(error);
//     });
// };

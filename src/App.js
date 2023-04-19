import "./App.css";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SingleProduct from "./SingleProduct";
import Order from "./Order";
import CategoryProducts from "./CategoryProducts";
import Body from "./Body";
import Cart from "./Cart";
import Avatar from "./Avatar";
import Signup from "./Signup";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<Body />} />
            <Route path="/:id" element={<SingleProduct />} />
            <Route path="/category/:category" element={<CategoryProducts />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/avatar"
            element={
              <ProtectedRoute>
                <Avatar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:id/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

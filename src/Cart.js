import React from "react";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./redux/slice/CartSlice";
import { useNavigate } from "react-router";

function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.cart.cartItems);
  const totalPrice = useSelector((store) => store.cart.totalPrice);

  const navigate = useNavigate();

  return (
    <div className="min-w-[384px] max-w-sm min-h-full max-h-screen bg-orange-200  fixed right-0 top-14 ">
      {carts.length > 0 ? (
        <>
          <div className="flex justify-between mx-16">
            <button
              className="px-2 mr-8 my-2 rounded-lg text-white font-semibold w-full bg-red-500 p-1 hover:bg-red-400 hover:text-gray-800"
              onClick={() => dispatch(clearCart())}
            >
              CLEAR ALL
            </button>
            <button
              className="px-2 my-2 rounded-lg text-white font-semibold w-full  bg-green-500 p-1 hover:bg-green-400 hover:text-gray-800"
              onClick={() => navigate("/order/order")}
            >
              Buy
            </button>
          </div>
          <div className="overflow-y-scroll max-h-[90vh] pb-24">
            {carts.map((item) => {
              return <CartCard cart={item} />;
            })}
          </div>
          <h1 className="bg-orange-500 text-center text-white font-bold text-lg fixed bottom-0 min-w-[384px]  mt-8 py-3">
            ₹ {totalPrice}
          </h1>
        </>
      ) : (
        <h1 className="font-semibold text-center mt-60 text-orange-600 text-lg">
          Oops! No items in cart
        </h1>
      )}
    </div>
  );
}

export default Cart;

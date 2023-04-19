import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux/slice/CartSlice";

function CartCard(props) {
  const { thumbnail, title, price, quantity } = props.cart;

  const dispatch = useDispatch();

  return (
    <div>
      <div className="m-2 p-4 rounded-xl bg-white">
        <div className="mb-2 flex justify-around">
          <img src={thumbnail} alt={thumbnail} className="max-w-[80px]" />
          <h1 className="title text-lg font-semibold text-gray-700">{title}</h1>
        </div>
        <hr />
        <div className=" mt-2 flex justify-around">
          <h1 className="price text-base font-bold">₹ {price * 70}</h1>
          <div className="flex">
            <h1
              className="ml-4 font-medium ring-1 w-4 h-2 pb-6 text-center bg-orange-50 hover:cursor-pointer hover:bg-orange-100"
              onClick={() => {
                dispatch(addToCart(props.cart));
              }}
            >
              +
            </h1>
            <h1 className="ml-4 font-medium">{quantity}</h1>
            <h1
              className="ml-4 font-medium ring-1 w-4 h-2 pb-6 text-center bg-orange-50 hover:cursor-pointer hover:bg-orange-100"
              onClick={() => {
                dispatch(removeFromCart(props.cart));
              }}
            >
              -
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

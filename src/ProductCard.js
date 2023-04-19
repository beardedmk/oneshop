import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addPrice } from "./redux/slice/CartSlice";

export default function ProductCard(props) {
  const { title, thumbnail, discountPercentage, price, id, category } =
    props.prd;

  const dispatch = useDispatch();

  function handleAddToCart() {
    console.log("cartClicked");
    dispatch(addToCart(props.prd));
    dispatch(addPrice(price));
  }

  return (
    <div className="productCard bg-slate-100 mb-4 ml-4 p-4 w-[260px] h-[380px] flex flex-col justify-between rounded-md hover:bg-slate-200 hover:ring-1">
      <img src={thumbnail} alt={thumbnail} className="h-32 w-56 " />
      <span className="bg-orange-400 w-fit px-1 py-0.5 rounded-lg text-white text-xs font-semibold">
        {category}
      </span>
      <div>
        <h2 className="font-semibold text-base">{title}</h2>
        <div className="flex justify-between font-medium text-sm mt-2 ">
          <h2 className="text-orange-500 bg-white w-fit px-3 py-0.5 rounded-lg">
            Price: ₹{price * 70}
          </h2>
          <h2 className="text-red-400 text-xs my-auto">
            Discount: {discountPercentage}%
          </h2>
        </div>
      </div>
      <button
        className="bg-orange-200 text-lg text-orange-500 p-2 font-semibold text-center rounded-md hover:bg-white hover:ring-1 hover:ring-orange-500 hover:text-orange-600 hover:cursor-pointer"
        onClick={handleAddToCart}
      >
        add to cart
      </button>
      <Link
        className="bg-green-600 text-lg text-white p-2 font-semibold text-center rounded-md hover:bg-white hover:ring-1 hover:ring-green-500 hover:text-green-600 hover:cursor-pointer"
        to={`/${id}`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Buy
      </Link>
    </div>
  );
}

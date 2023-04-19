import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "./redux/middlewares/Thunk";
import { useEffect } from "react";

function Body() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <div className="ml-2">
      {products ? (
        <div className="flex flex-wrap">
          {products.map((itm) => {
            return <ProductCard key={itm.id} prd={itm} />;
          })}
        </div>
      ) : (
        <h1 className="font-medium text-8xl mx-4">Loading . . .</h1>
      )}
    </div>
  );
}

export default Body;

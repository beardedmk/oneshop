import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  getCategoryProducts,
  getSingleProduct,
} from "./redux/middlewares/Thunk";
import SingleProductSmallCard from "./SingleProductSmallCard";
import ProductCard from "./ProductCard";

function SingleProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((store) => store.product.product);
  const similarProducts = useSelector((store) => store.product.similar);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  function onBuyClick(id) {
    navigate(`/${id}/order`);
  }

  return (
    <div className="my-6">
      <div className="lg:flex justify-between ">
        {data ? (
          <>
            <div className="flex">
              <div className="ml-2 p-2 ring-1">
                {data.images.map((img, index) => {
                  return <SingleProductSmallCard key={index} img={img} />;
                })}
              </div>
              <div className=" ml-2 p-2 bg-slate-100 max-w-lg">
                <img
                  src={data.thumbnail}
                  alt=""
                  className=" max-h-[420px] min-h-[420px]"
                />
              </div>
            </div>
            <div className="max-w-full ml-2 p-2">
              {
                <ul>
                  <li className="text-3xl my-8">
                    <span className="font-bold text-slate-600">
                      {data.title}
                    </span>
                    by
                    <span className="font-bold text-orange-600">
                      {data.brand}
                    </span>
                  </li>
                  <li className="min-h-[220px]">
                    {data.description}
                    <h1 className="text-white bg-orange-500 w-fit mt-4 px-2 py-0.5 rounded-lg">
                      {data.category}
                    </h1>

                    <h1 className="text-slate-600 font-semibold text-3xl mt-6">
                      Best buy at: ₹{data.price * 70}
                    </h1>
                  </li>

                  <li
                    className=" hover:ring-1 hover:ring-orange-600 hover:bg-white hover:text-orange-600 hover:cursor-pointer rounded-2xl w-full p-4 bg-orange-600 text-white text-lg font-semibold text-center"
                    onClick={onBuyClick}
                  >
                    <button>Buy Now</button>
                  </li>
                </ul>
              }
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="p-4 my-4">
        <h1 className="text-2xl text-orange-600">Similar Products:</h1>
        <div className=" flex flex-wrap justify-evenly">
          {similarProducts ? (
            <>
              {similarProducts.map((itm, index) => {
                return <ProductCard key={index} prd={itm} />;
              })}
            </>
          ) : (
            <>
              <h1>Loading</h1>
              {data ? dispatch(getCategoryProducts(data.category)) : ""}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

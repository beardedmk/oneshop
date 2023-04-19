import { useDispatch, useSelector } from "react-redux";
import { productsCategoriesThunk } from "./redux/middlewares/Thunk";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function SidebarLarge() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.product.category);

  const navigate = useNavigate();
  useEffect(() => {
    let fetched = false;
    if (!fetched) {
      dispatch(productsCategoriesThunk());
      fetched = true;
    }
  }, [1]);

  function handleCategoryClicked(e, itm) {
    e.stopPropagation();
    navigate(`/category/${itm}`);
  }

  return (
    <div className="Slider p-2 bg-orange-100 min-w-min h-full">
      <div className="filter">
        <h1 className="text-lg font-bold text-orange-500 my-2">Filter by:</h1>
        <h2 className="font-medium hover:cursor-pointer m-4">Category</h2>

        <ul>
          {category ? (
            <>
              {category.map((itm, index) => {
                return (
                  <li
                    key={index}
                    className="mx-8 my-2 text-zinc-600 hover:text-black hover:font-semibold hover:bg-orange-200"
                    onClick={(e) => handleCategoryClicked(e, itm)}
                  >
                    <div className="px-2">{itm}</div>
                  </li>
                );
              })}
            </>
          ) : (
            <li className="font-normal text-lg text-center  ">
              Loading . . .{" "}
            </li>
          )}
        </ul>
      </div>
      <div className="sort">
        <h1 className="text-lg font-bold text-orange-500 my-2">Sorted by:</h1>
        <h2 className="font-medium hover:cursor-pointer m-4">Price:</h2>
        <h3 className="mx-8 my-2 text-zinc-600 hover:text-black hover:font-semibold">
          Low to High
        </h3>
        <h3 className="mx-8 my-2 text-zinc-600 hover:text-black hover:font-semibold">
          High to Low
        </h3>
        <h2 className="font-medium hover:cursor-pointer hover:text-slate-700 m-4">
          New Arrivals
        </h2>
      </div>
      <button className="mt-10 p-2 font-medium text-white w-full rounded-lg bg-red-400">
        Reset All
      </button>
    </div>
  );
}

export default SidebarLarge;

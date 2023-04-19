import {
  faShoppingCart,
  faUserAstronaut,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClose, setOpen } from "./redux/slice/CartStatus";
import { fetchUser } from "./redux/middlewares/Thunk";
import debounce from "lodash/debounce";

function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  const cartStatus = useSelector((store) => store.cartStatus.isOpen);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.addEventListener("resize", checkWidth);
  // });
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     const { id } = JSON.parse(localStorage.getItem("authToken"));
  //     dispatch(fetchUser(id));
  //   }
  // }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const totalCartItems = useSelector((store) => store.cart.cartItems.length);

  // useEffect(() => {
  //   const delayedSearch = debounce(() => {
  //     if (searchTerm) {
  //       console.log("Search for: ", searchTerm); // replace with your search function
  //     }
  //   }, 1200); // adjust the delay time to your liking (in milliseconds)

  //   delayedSearch();

  //   return delayedSearch.cancel;
  // }, [searchTerm]);

  // useEffect(() => {
  //   window.addEventListener("resize", checkWidth);
  //   if (localStorage.getItem("authToken")) {
  //     const { id } = JSON.parse(localStorage.getItem("authToken"));
  //     dispatch(fetchUser(id));
  //   }
  //   return () => {
  //     window.removeEventListener("resize", checkWidth);
  //   };
  // }, [dispatch]);

  useEffect(() => {
    const delayedSearch = debounce(() => {
      if (searchTerm) {
        fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
          .then((res) => res.json())
          .then(console.log); // replace with your search function
      }
    }, 1200); // adjust the delay time to your liking (in milliseconds)

    delayedSearch();

    window.addEventListener("resize", checkWidth);

    if (localStorage.getItem("authToken")) {
      const { id } = JSON.parse(localStorage.getItem("authToken"));
      dispatch(fetchUser(id));
    }

    return () => {
      delayedSearch.cancel();
      window.removeEventListener("resize", checkWidth);
    };
  }, [searchTerm, dispatch]);

  function checkWidth() {
    setWidth(window.innerWidth);
  }
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function setCart() {
    if (cartStatus) {
      dispatch(setClose());
    } else {
      dispatch(setOpen());
    }
  }
  function handleSearchClick() {
    setToggleSearch(!toggleSearch);
  }

  return (
    <div>
      {cartStatus ? <Cart /> : <></>}
      <div className="h-14 w-full bg-orange-300 flex justify-between shadow-lg fixed">
        <h1
          className="title text-white font-thin text-4xl py-1 mx-4 tracking-widest hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          OneShop
        </h1>

        {width < 580 ? (
          <>
            {!toggleSearch ? (
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                style={{ color: "#404040" }}
                className="my-auto"
                onClick={handleSearchClick}
              />
            ) : (
              <input
                autoFocus
                type="text"
                className="h-8 pl-1 w-16 text-gray-500 my-auto outline-none rounded-md"
                onChange={handleInputChange}
              />
            )}
          </>
        ) : (
          <input
            type="text"
            placeholder="Search . . ."
            className="h-8  text-gray-400 my-auto p-4 outline-none rounded-md"
            onChange={handleInputChange}
          />
        )}
        <div className="my-auto flex">
          <div className="mr-8 flex hover:cursor-pointer" onClick={setCart}>
            <FontAwesomeIcon icon={faShoppingCart} size="xl" />
            <h1 className="bg-red-600 rounded-3xl w-fit h-4 font-bold text-white text-xs px-1 -mt-2 -ml-2 ">
              {totalCartItems}
            </h1>
          </div>
          <FontAwesomeIcon
            icon={faUserAstronaut}
            size="xl"
            className="mr-6 hover:cursor-pointer"
            onClick={() => {
              navigate("/avatar");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClose } from "./redux/slice/CartStatus";

function Order() {
  const userData = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClose());
  });

  return (
    <div className="Order w-full">
      <div className="flex mt-20 text-center">
        <div className="bg-orange-200 min-w-[350px] min-h-full mx-auto py-12 px-8 rounded-xl">
          <h1 className=" text-2xl text-orange-500 font-bold mb-4">
            Order Details:
          </h1>

          <form action="" className="flex flex-col text-gray-700 font-medium">
            <textarea
              name="address"
              placeholder="Fill your address"
              id=""
              rows="2"
              className="mt-4 p-2"
              defaultValue={
                userData
                  ? `${userData.address.address} ${userData.address.city} ${userData.address.postalCode} ${userData.address.state}`
                  : ""
              }
            ></textarea>
            <input
              type="text"
              placeholder="Enter your Name"
              className="mt-4 p-2"
              defaultValue={
                userData ? `${userData.firstName} ${userData.lastName}` : ""
              }
            />
            <input
              type="tel"
              placeholder="Enter your Mobile number"
              className="mt-4 p-2"
              defaultValue={userData ? userData.phone : ""}
            />
            <input
              type="button"
              value="Place Order"
              className="mt-8 p-2 bg-orange-400 text-lg font-bold text-white hover:ring-1 hover:cursor-pointer hover:ring-orange-400 hover:text-orange-400 hover:bg-white"
              onClick={() => {
                window.alert("Order Placed");
                window.location.href = "/";
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;

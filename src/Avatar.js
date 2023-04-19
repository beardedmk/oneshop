import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Avatar() {
  // const dispatch = useDispatch();
  const data = useSelector((store) => store.user.user);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const { id } = JSON.parse(localStorage.getItem("authToken"));
  //   dispatch(fetchUser(id));
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="w-[400px] h-[400px] m-auto mt-20    rounded-lg py-8 px-14 bg-orange-300">
      {data ? (
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="my-auto text-xl font-semibold text-white">
              {data.firstName} {data.maidenName} {data.lastName}
            </h1>
            <div className="bg-black rounded-full">
              <img src={data.image} alt="" className="w-12" />
            </div>
          </div>
          <hr />
          <div className="text-lg font-semibold text-white mt-4">
            <h1 className="text-gray-700">Contact:</h1>
            <h1>{data.email}</h1>
            <h1>{data.phone}</h1>
            <h1 className="text-gray-700 mt-4">Address:</h1>
            <h1>{data.address.address}</h1>
            <h1>{data.address.city}</h1>
            <h1>{data.address.postalCode}</h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-orange-50 py-1 px-2 mt-6 ml-24 rounded-lg font-medium text-red-600 hover:p"
          >
            Logout
          </button>
        </div>
      ) : (
        <h1 className="text-2xl">Loading . . .</h1>
      )}
    </div>
  );
}

export default Avatar;

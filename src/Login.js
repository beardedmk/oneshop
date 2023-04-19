import { useDispatch } from "react-redux";
import { authThunk } from "./redux/middlewares/Thunk";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginDetail, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [token, setToken] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setToken(true);
      navigate("/");
    } else {
      setToken(false);
    }
  }, [navigate, token]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetail, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authThunk(loginDetail));

    setTimeout(() => {
      if (localStorage.getItem("authToken")) {
        setToken(true);
        navigate("/");
      }
    }, 1500);
  };

  return (
    <div className="w-[400px] h-[400px] m-auto mt-20    rounded-lg py-8 px-14 bg-orange-300">
      <h1 className="text-5xl font-semibold text-white mb-12">Login</h1>
      <form className="flex flex-col">
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
          value={loginDetail.username}
          className="mt-4 outline-none p-2 text-gray-500 font-medium rounded-md"
          required
        />
        <input
          onChange={handleChange}
          value={loginDetail.password}
          name="password"
          type="password"
          placeholder="password"
          className="mt-4 outline-none p-2 text-gray-500 font-medium rounded-md"
          required
        />
        <input
          type="button"
          value="Login"
          className="hover:cursor-pointer mt-8 w-full bg-orange-500 p-2 rounded-md text-lg font-medium text-white hover:outline-1"
          onClick={handleSubmit}
        />
      </form>
      <h1 className=" mt-3 text-sm text-white">
        Create new Account -{" "}
        <Link to={"/signup"} className="text-orange-600 font-medium">
          Signup
        </Link>{" "}
      </h1>
    </div>
  );
}

export default Login;

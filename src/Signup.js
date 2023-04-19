import { useDispatch } from "react-redux";
import { signUpThunk } from "./redux/middlewares/Thunk";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [signupDetail, setSignupDetails] = useState({
    firstName: "",
    password: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupDetails({ ...signupDetail, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpThunk(signupDetail));
  };

  return (
    <div className="w-[400px] h-[500px] m-auto mt-10    rounded-lg py-8 px-14 bg-orange-300">
      <h1 className="text-5xl font-semibold text-white mb-12">Login</h1>
      <form className="flex flex-col">
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="username"
          value={signupDetail.firstName}
          className="mt-4 outline-none p-2 text-gray-500 font-medium rounded-md"
          required
        />
        <input
          onChange={handleChange}
          value={signupDetail.password}
          name="password"
          type="password"
          placeholder="password"
          className="mt-4 outline-none p-2 text-gray-500 font-medium rounded-md"
          required
        />
        <input
          onChange={handleChange}
          value={signupDetail.email}
          name="email"
          type="email"
          placeholder="email"
          className="mt-4 outline-none p-2 text-gray-500 font-medium rounded-md"
          required
        />

        <input
          onChange={handleChange}
          value={signupDetail.phone}
          name="phone"
          type="tel"
          placeholder="mobile number"
          className="mt-4 outline-none p-2 text-gray-500 font-medium rounded-md"
          required
        />
        <input
          type="button"
          value="SignUp"
          className="hover:cursor-pointer mt-8 w-full bg-orange-500 p-2 rounded-md text-lg font-medium text-white hover:outline-1"
          onClick={handleSubmit}
        />
      </form>
      <h1 className=" mt-3 text-sm text-white">
        Already have Account -{" "}
        <Link to={"/login"} className="text-orange-600 font-medium">
          Login
        </Link>
      </h1>
    </div>
  );
}

export default Signup;

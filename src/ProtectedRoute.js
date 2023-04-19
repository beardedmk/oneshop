import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(true);

  useEffect(() => {
    setToken(localStorage.getItem("authToken"));
  }, []);

  const navigate = useNavigate();

  return <>{token !== null ? children : navigate("/login")}</>;
};

export default ProtectedRoute;

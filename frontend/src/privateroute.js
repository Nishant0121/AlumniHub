import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context.jsx";

const PrivateRoute = () => {
  const { authUser } = useContext(AppContext);

  return authUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

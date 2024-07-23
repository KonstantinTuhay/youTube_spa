import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/registr" replace />;
};

export default PrivateRoute;

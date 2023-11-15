import { Outlet, Navigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

import { useSelector } from "react-redux";
import { Fragment } from "react";
function PrivateRoutes() {
  const { isAuthorised } = useSelector((state) => state.authReducer);
  const location = useLocation();
  // console.log(location);
  return isAuthorised ? (
    <Fragment>
      <Navbar/>
      <Outlet />
    </Fragment>
  ) : (
    <Navigate to={`/`} state={{ from: location }} replace />
  );
}

export default PrivateRoutes;

//user.user_type === "admin" ?( <Outlet /> ) : ( <Navigate to={`/clinicalmenu`} /> )

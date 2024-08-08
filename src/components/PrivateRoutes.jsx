import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

const PrivateRoutes = () => {
  const { isLoggedIn, checkStatus } = useAuthStatus();

  if (checkStatus) {
    return (
      <h1 className="display-1 text-center text-dark">
        <i class="fas fa-circle-notch"></i>Loading..!
        {/* <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
      </h1>
    );

  }
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;

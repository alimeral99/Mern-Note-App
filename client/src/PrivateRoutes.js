import React from "react";

import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const jwt = localStorage.getItem("jwt");

  return jwt ? <Outlet /> : <Navigate to="/signup" />;
}

export default PrivateRoutes;

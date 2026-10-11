import React from "react";
import { Navigate, useLocation } from "react-router";

const SuperAdminProtected = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem("superAdminToken");
  const role = localStorage.getItem("role");

  if (!token || role !== "superadmin") {
    return (
      <Navigate
        to="/superadmin/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default SuperAdminProtected;
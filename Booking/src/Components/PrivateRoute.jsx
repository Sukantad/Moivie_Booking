import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.AuthState);
  console.log(token, "kuch kuch hota hai")

  // const sg=false;

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;

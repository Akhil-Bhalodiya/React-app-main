import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({children}) => {
  return (
    <div>
      {localStorage.getItem("token") ? <Navigate to="/home" /> : children}
    </div>
  );
};



export default PublicRoutes;
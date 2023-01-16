import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {

  return (
    <div>
      {localStorage.getItem("token") ? children : <Navigate to="/" />}
    </div>
  );
};


export default PrivateRoutes;

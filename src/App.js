import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../src/pages/loginpage/Login";
import HomePage from "../src/pages/home/HomePage";
import Typing from "../src/components/typing/Typing";
import Toggle from "../src/components/toggle/Toggle";
import Billing from "../src/components/billing/Billing";
import Increment from "../src/components/increment/Increment";
import Clone from "../src/components/cloneElement/Clone";
import Converter from "../src/components/converter/Converter";
import MovieDB from "../src/components/moviedb/MovieDB";
import ContextDemo from "../src/components/contextdemo/ContextDemo";
import RTK from "../src/components/reduxtoolkit/RTK";
import PrivateRoutes from "./routes/Protected";
import PublicRoutes from "./routes/PublicRoutes";
import State from "../src/contextfile/State";

function App() {
  return (
    <React.Fragment>
      <State>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoutes>
                  <HomePage />
                </PrivateRoutes>
              }
            />
            <Route
              path="/typing"
              element={
                <PrivateRoutes>
                  <Typing />
                </PrivateRoutes>
              }
            />
            <Route
              path="/toggle"
              element={
                <PrivateRoutes>
                  <Toggle />
                </PrivateRoutes>
              }
            />
            <Route
              path="/billing"
              element={
                <PrivateRoutes>
                  <Billing />
                </PrivateRoutes>
              }
            />
            <Route
              path="/increment"
              element={
                <PrivateRoutes>
                  <Increment />
                </PrivateRoutes>
              }
            />
            <Route
              path="/clone"
              element={
                <PrivateRoutes>
                  <Clone />
                </PrivateRoutes>
              }
            />
            <Route
              path="/converter"
              element={
                <PrivateRoutes>
                  <Converter />
                </PrivateRoutes>
              }
            />
            <Route
              path="/moviedb"
              element={
                <PrivateRoutes>
                  <MovieDB />
                </PrivateRoutes>
              }
            />
            <Route
              path="/context"
              element={
                <PrivateRoutes>
                  <ContextDemo />
                </PrivateRoutes>
              }
            />
            <Route
              path="/rtk"
              element={
                <PrivateRoutes>
                  <RTK />
                </PrivateRoutes>
              }
            />
          </Routes>
        </Router>
      </State>
    </React.Fragment>
  );
}

export default App;

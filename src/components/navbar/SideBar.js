import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedin } from "../../redux/slices/LoginSlice";

const SideBar = () => {
  const dispatch = useDispatch()

  const history = useNavigate();
  const userLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedin(false));
    history("/");
  };

  return (
    <div className="sidebar">
      <h1>Project List</h1>
      <div className="m-Top">
        <NavLink className="Link" activeclassname="active" to="/typing">
          Typing Demo
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/toggle">
          Toggle
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/billing">
          Billing
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/increment">
          Increment
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/clone">
          Clone
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/converter">
          Converter
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/moviedb">
          Movie App
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/context">
          Context Demo
        </NavLink>
        <br></br>
        <NavLink className="Link" activeclassname="active" to="/rtk">
          Redux-toolkit
        </NavLink>
      </div>
      <Button className="sidebtn" onClick={userLogout} variant="danger">
        LogOut
      </Button>
    </div>
  );
};

export default SideBar;

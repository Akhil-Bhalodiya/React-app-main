import React from "react";
import NavBar from "../navbar/NavBar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import SideBar from "../navbar/SideBar";
import { setUpdate } from "../../redux/slices/IncrementSlice";
import { useDispatch, useSelector } from "react-redux";

const Increment = () => {
  const Increment = useSelector((state) => state.increment.update);
  const dispatch = useDispatch();

  const minus = () => {
      dispatch(setUpdate(Increment - 1));
    };

  const plus = () => {
    dispatch(setUpdate(Increment + 1));
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="App m-top">
        <h1>Increment Decrement Counter</h1>
        <br />
        <Button variant="dark" onClick={minus}>
          -
        </Button>
        <span>
          <Badge bg="secondary">{Increment}</Badge>
        </span>
        <Button variant="dark" onClick={plus}>
          +
        </Button>
      </div>
    </>
  );
};

export default Increment;

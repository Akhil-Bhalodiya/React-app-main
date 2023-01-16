import React from "react";
import NavBar from "../navbar/NavBar";
import SideBar from "../navbar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setFirst } from "../../redux/slices/TypingSlice";

function Typing() {
  const Typing = useSelector((state) => state.typing.first);

  const dispatch = useDispatch();

  const type = (e) => {
    dispatch(setFirst(e.target.value));
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="App m-top">
        <h1>Get Input Box Value</h1>
        Input : <input type="text" onChange={type} />
        <br />
        <br />
        <h1>{Typing}</h1>
      </div>
    </>
  );
}

export default Typing;

import React from "react";
import NavBar from "../navbar/NavBar";
import SideBar from "../navbar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../../redux/slices/ToggleSlice";

function App() {
  const Toggleval = useSelector((state) => state.toggle.toggle);
  const dispatch = useDispatch();

  const show = () => {
    dispatch(setToggle(true));
  };

  const hide = () => {
    dispatch(setToggle(false));
  };

  const Toggle = () => {
    dispatch(setToggle(!Toggleval));
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="App m-top">
        <h1>Show/Hide On Click</h1>
        <button className="btn" onClick={show}>
          Show
        </button>
        <button className="btn" onClick={hide}>
          Hide
        </button>
        <button className="btn" onClick={Toggle}>
          Toggle
        </button>
        {Toggleval ? <h1 style={{color:"red"}}>Hello Akhil!!!!</h1> : null}
      </div>
    </>
  );
}

export default App;

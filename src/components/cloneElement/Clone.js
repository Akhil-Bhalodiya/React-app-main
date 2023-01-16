import React, { useState } from "react";
import Element from "./Element";
import Button from "react-bootstrap/Button";
import NavBar from "../navbar/NavBar";
import SideBar from "../navbar/SideBar";

function App() {
  const [clone, setClone] = useState([]);
  const CloneElement = () => {
    setClone([
      ...clone,
      React.createElement(Element, { key: clone.length }),
    ]);
    <br />;
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="App m-top">
        <h1>Clone element</h1>
        <Button variant="dark" onClick={CloneElement}>
          New
        </Button>
        <br />
        <br />
        <div>{clone}</div>
      </div>
    </>
  );
}

export default App;

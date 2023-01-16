import { useState, createContext } from "react";
import InputParent from "./InputField/InputParent";
import InputChild from "./InputField/InputChild";
import CheckBoxChild from "./Checkbox/CheckBoxChild";
import CheckBoxParent from "./Checkbox/CheckBoxParent";
import RadioParent from "./Radio/RadioParent";
import RadioChild from "./Radio/RadioChild";
import DropDownParent from "./DropDown/DropDownParent";
import DropDownChild from "./DropDown/DropDownChild";
import NavBar from "../navbar/NavBar";
import SideBar from "../navbar/SideBar";

const Context = createContext();

function App() {
  const [input, setInput] = useState("");
  const [check, setCheck] = useState({});
  const [radio, setRadio] = useState();
  const [select, setSelect] = useState();

  return (
    <>
      <NavBar />
      <SideBar />
      <Context.Provider
        value={{
          input,
          setInput,
          check,
          setCheck,
          radio,
          setRadio,
          select,
          setSelect,
        }}
      >
        <div className="App">
          <h1>Context Demo</h1>
          <br></br>
          <br></br>
          <InputParent />
          Duplicating state in Child Component
          <InputChild></InputChild>
          <br></br>
          <br></br>
          <CheckBoxChild></CheckBoxChild>
          Duplicating state in Chid Component
          <CheckBoxParent></CheckBoxParent>
          <br></br>
          <br></br>
          <RadioParent></RadioParent>
          Duplicating state in Child Component
          <RadioChild></RadioChild>
          <br></br>
          <br></br>
          <DropDownParent></DropDownParent>
          Duplicating state in Child Component
          <DropDownChild></DropDownChild>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
export { Context };

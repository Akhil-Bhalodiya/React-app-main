import NavBar from "../navbar/NavBar";
import SideBar from "../navbar/SideBar";
import CheckboxChild from "./components/checkbox/CheckboxChild";
import CheckboxParent from "./components/checkbox/CheckboxParent";
import DropdownChild from "./components/dropdown/DropdownChild";
import DropdownParent from "./components/dropdown/DropdownParent";
import InputChild from "./components/input/InputChild";
import InputParent from "./components/input/InputParent";
import RadioChild from "./components/radio/RadioChild";
import RadioParent from "./components/radio/RadioParent";

function RTK() {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="App">
        <h1>Redux-toolkit Demo</h1>
        <br></br>
        <br></br>
        <InputChild></InputChild>
        Duplicating State in Child element using Redux toolkit
        <InputParent></InputParent>
        <br></br>
        <br></br>
        <CheckboxChild></CheckboxChild>
        Duplicating State in Child element using Redux toolkit
        <CheckboxParent></CheckboxParent>
        <br></br>
        <br></br>
        <RadioChild></RadioChild>
        Duplicating State in Child element using Redux toolkit
        <RadioParent></RadioParent>
        <br></br>
        <br></br>
        <DropdownChild></DropdownChild>
        Duplicating State in Child element using Redux toolkit
        <DropdownParent></DropdownParent>
      </div>
    </>
  );
}

export default RTK;

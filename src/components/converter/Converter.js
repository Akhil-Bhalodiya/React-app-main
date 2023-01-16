import React from "react";
import NavBar from "../navbar/NavBar";
import SideBar from "../navbar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setFromunit,
  setTounit,
  setCurrentstate,
  setValue,
  setResult,
} from "../../redux/slices/ConverterSlice";

function Converter() {
  const fromUnit = useSelector((state) => state.converter.fromunit);
  const toUnit = useSelector((state) => state.converter.tounit);
  const currentState = useSelector((state) => state.converter.currentstate);
  const Value = useSelector((state) => state.converter.value);
  const Result = useSelector((state) => state.converter.result);

  const dispatch = useDispatch();

  const onselectChange = (event) => {
    const Value = event.target.value;
    dispatch(setCurrentstate(Value));
    if (Value === "1") {
      dispatch(setFromunit("Celsius"));
      dispatch(setTounit("Fahrenhit"));
    } else if (Value === "2") {
      dispatch(setFromunit("Minute"));
      dispatch(setTounit("Second"));
    } else {
      dispatch(setFromunit("input 1"));
      dispatch(setTounit("input 2"));
    }
  };

  const onValuechange = (event) => {
    dispatch(setValue(event.target.value));
    if (currentState === "1") {
      dispatch(setResult((event.target.value * 9.0) / 5.0 + 32));
    } else if (currentState === "2") {
      dispatch(setResult(event.target.value * 60));
    }
  };

  const onResultchange = (event) => {
    dispatch(setResult(event.target.value));
    if (currentState === "1") {
      dispatch(setValue(((event.target.value - 32.0) * 5.0) / 9.0));
    } else if (currentState === "2") {
      dispatch(setValue(event.target.value / 60));
    }
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="App m-top">
        <h1>Temp/Time Converter</h1>
        <form>
          <br></br>
          <label>Select The Property :-{" "}</label>
          <select onChange={onselectChange}>
            <option>Select</option>
            <option value="1">Temperature</option>
            <option value="2">Time</option>
          </select>
          <br></br>
          <br></br>
          <span>
            <p>
              {fromUnit} :{" "}
              <input
                type="number"
                pattern="[0-9]*"
                placeholder="Enter Value"
                value={Value}
                onChange={onValuechange}
              ></input>
            </p>
          </span>
          <p>=</p>
          <span>
            <p>
              {toUnit} :{" "}
              <input
                type="number"
                pattern="[0-9]*"
                placeholder="Enter Value"
                value={Result}
                onChange={onResultchange}
              ></input>
            </p>
          </span>
        </form>
      </div>
    </>
  );
}

export default Converter;

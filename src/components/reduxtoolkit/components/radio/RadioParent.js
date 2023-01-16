import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRadio } from "../../../../redux/slices/RadioSlice"

const RadioParent = () => {
  const Radio = useSelector((state) => state.radiobtn.radio);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          type="radio"
          value="Developer"
          onChange={(e) => dispatch(setRadio(e.target.value))}
          checked={Radio === "Developer"}
        ></input>
        Developer
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          value="Designer"
          onChange={(e) => dispatch(setRadio(e.target.value))}
          checked={Radio === "Designer"}
        ></input>
        Designer
      </label>
    </div>
  );
};

export default RadioParent;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVal } from "../../../../redux/slices/InputSlice"

const InputChild = () => {
  const type = useSelector((state) => state.inputfield.val);
  const dispatch = useDispatch();
  return (
    <div>
      <label>Input :- </label>
      <input
        type="text"
        value={type}
        onChange={(e) => dispatch(setVal(e.target.value))}
      ></input>
    </div>
  );
};

export default InputChild;

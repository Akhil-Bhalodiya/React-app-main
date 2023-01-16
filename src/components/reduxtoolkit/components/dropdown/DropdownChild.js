import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTik } from "../../../../redux/slices/DropDownSlice"

const DropdownChild = () => {
  const Tik = useSelector((state) => state.DropDown.tik);
  const dispatch = useDispatch();
  return (
    <div>
      <select value={Tik} onChange={(e) => dispatch(setTik(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

export default DropdownChild;

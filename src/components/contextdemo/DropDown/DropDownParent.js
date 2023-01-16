import { React, useContext } from "react";
import context  from "../../../contextfile/ContextMain"


const DropDownParent = () => {
  const { select, setSelect } = useContext(context);

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <select onChange={handleSelect} value={select}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

export default DropDownParent;

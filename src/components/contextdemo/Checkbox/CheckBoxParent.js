import React, { useContext } from "react";
import context  from "../../../contextfile/ContextMain"

const CheckBoxParent = () => {
  const { check, setCheck } = useContext(context);
  const handleCheck = (e) => {
    const id = e.target.id;
    setCheck({ ...check, [id]: e.target.checked });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="Android"
        value="Android"
        onChange={handleCheck}
        checked={check.Android}
      ></input>
      <label>Android </label>
      <br></br>

      <input
        type="checkbox"
        id="IOS"
        value="IOS"
        onChange={handleCheck}
        checked={check.IOS}
      ></input>
      <label>IOS</label>
      <br></br>
      <input
        type="checkbox"
        id="WEB"
        value="WEB"
        onChange={handleCheck}
        checked={check.WEB}
      ></input>
      <label>WEB</label>
    </div>
  );
};

export default CheckBoxParent;

import { React, useContext } from "react";
import context  from "../../../contextfile/ContextMain"

const CheckBoxChild = () => {
  const { check, setCheck } = useContext(context);

  const handleCheck = (e) => {
    const id = e.target.id;
    setCheck({ ...check, [id]: e.target.checked });
  };  
  return (
    <div>
      <input
        type="checkbox"
        value="Android"
        id="Android"
        onChange={handleCheck}
        checked={check.Android}
      ></input>
      <label>Android</label>
      <br></br>
      <input
        type="checkbox"
        value="IOS"
        id="IOS"
        onChange={handleCheck}
        checked={check.IOS}
      ></input>
      <label>IOS</label>
      <br></br>
      <input
        type="checkbox"
        value="WEB"
        id="WEB"
        onChange={handleCheck}
        checked={check.WEB}
      ></input>
      <label>WEB</label>
    </div>
  );
};

export default CheckBoxChild;

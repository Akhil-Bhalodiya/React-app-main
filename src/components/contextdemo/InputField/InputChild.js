import React, { useContext } from "react";
import context  from "../../../contextfile/ContextMain"


const InputChild = () => {
  const { input, setInput } = useContext(context);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      Input : <input type="text" onChange={handleChange} value={input}></input>
    </div>
  );
};

export default InputChild;

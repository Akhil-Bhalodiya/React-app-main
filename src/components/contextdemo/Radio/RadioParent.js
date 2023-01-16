import { React, useContext } from "react";
import context  from "../../../contextfile/ContextMain"


const RadioParent = () => {
  const { radio, setRadio } = useContext(context);

  const handleRadio = (e) => {
    setRadio(e.target.value);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          value="Developer"
          onChange={handleRadio}
          checked={radio === "Developer"}
        ></input>
        Developer
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          value="Designer"
          onChange={handleRadio}
          checked={radio === "Designer"}
        ></input>
        Designer
      </label>
    </div>
  );
};

export default RadioParent;

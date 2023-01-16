import { React, useContext } from "react";
import context  from "../../../contextfile/ContextMain"


const RadioChild = () => {
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
          checked={radio === "Developer"}
          onChange={handleRadio}
        ></input>
        Developer
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          value="Designer"
          checked={radio === "Designer"}
          onChange={handleRadio}
        ></input>
        Designer
      </label>
    </div>
  );
};

export default RadioChild;

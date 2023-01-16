import context from "./ContextMain";
import React, { useState } from "react";

const State = (props) => {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [indata, setIndata] = useState([]);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const [input, setInput] = useState("");
  const [check, setCheck] = useState({});
  const [radio, setRadio] = useState();
  const [select, setSelect] = useState();
  const [login, setLogin] = useState(true);
 
  const stateContainer = {
    login,
    setLogin,
    movies,
    setMovies,
    show,
    setShow,
    indata,
    setIndata,
    disable,
    setDisable,
    loading,
    setLoading,
    input,
    setInput,
    check,
    setCheck,
    radio,
    setRadio,
    select,
    setSelect,
  };
  return (
    <context.Provider value={stateContainer}>{props.children}</context.Provider>
  );
};

export default State;

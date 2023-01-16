import NavBar from "../navbar/NavBar"
import React from "react";
import SideBar from "../navbar/SideBar";
import InputNumber from 'react-input-just-numbers'
import { useDispatch, useSelector } from "react-redux";
import {setPrice, setQuantity} from '../../redux/slices/BillingSlice'

function App() {
  const priceVal = useSelector((state)=>state.billing.price)
  const quantityVal = useSelector((state)=>state.billing.quantity)

  const dispatch = useDispatch()

  const handlepriceChange = (event) => {
    dispatch(setPrice(event.target.value));
  };
  const handlequantityChange = (event) => {
    dispatch(setQuantity(event.target.value));
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="App m-top">
        <div>
          <h1>Price into Quantity</h1>
          <br></br>
          <label>
            Price :{" "}
            <InputNumber
              type="number"
              placeholder="Enter Price"
              value={priceVal}
              onChange={handlepriceChange}
            ></InputNumber>
          </label>
          <span> X </span>
          <label>
            Quantity :{" "}
            <InputNumber
              type="number"
              placeholder="Enter Quantity"
              value={quantityVal}
              onChange={handlequantityChange}
            ></InputNumber>
          </label>
        </div>
        <br></br>
        <h1>{priceVal * quantityVal}</h1>
      </div>
    </>
  );
}

export default App;

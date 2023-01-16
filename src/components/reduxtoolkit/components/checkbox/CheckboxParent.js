import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCheck } from "../../../../redux/slices/CheckSlice"


const CheckboxParent = () => {
  const Check = useSelector((state) => state.checkBox);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        value="Android"
        id="Android"
        onChange={(e) => dispatch(setCheck(e))}
        checked={Check.Android}
      />
      <label>Android</label>
      <br></br>
      <input
        type="checkbox"
        value="IOS"
        id="IOS"
        onChange={(e) => dispatch(setCheck(e))}
        checked={Check.IOS}
      />
      <label>IOS</label>
      <br></br>
      <input
        type="checkbox"
        value="WEB"
        id="WEB"
        onChange={(e) => dispatch(setCheck(e))}
        checked={Check.WEB}
      />
      <label>WEB</label>
    </div>
  );
};

export default CheckboxParent;

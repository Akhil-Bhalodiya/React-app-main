import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import sign from "../home/sign.svg";
import { userList } from "../../User/User";
import { useSelector,  useDispatch  } from "react-redux";
import { setLoggedin, setData } from "../../redux/slices/LoginSlice";

const Login = () => {

  const Data = useSelector((state)=>state.login.data)
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const Emailref = useRef();
  const Passwordref = useRef();

  const addData = (e) => {
    e.preventDefault();
    const toCompare = {
      email: Emailref.current.value,
      password: Passwordref.current.value,
    };
    const condition = userList?.filter(
      (user) =>
        user.email === toCompare.email && user.password === toCompare.password
    )?.[0];
    if (condition) {
      localStorage.setItem("token", condition.token);
      dispatch(setLoggedin(true));
      navigate("/home");
    } else {
      alert("please enter valid credentials");
    }
  };

  const handleInputChange = (e) => {
    dispatch(setData({ ...Data, [e.target.name]: e.target.value }));
  };

  const detail = () => {
    return (
      alert("Email : akhil@gmail.com & Password: akhil123")
    )
  }

  return (
    <>
      <div className="m-left m-top">
        <h1>Login Page</h1>
        <br />
        <Form onSubmit={addData}>
          <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              ref={Emailref}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              ref={Passwordref}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br></br>
        <Button onClick={()=>detail()}>Hint</Button>
        <div className="imgclass">
          <img src={sign} alt="poster"></img>
        </div>
      </div>
    </>
  );
};

export default Login;

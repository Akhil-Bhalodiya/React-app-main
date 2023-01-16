import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { userList } from "../../User/User";
import { setLoggedin } from "../../redux/slices/LoginSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch()
  const tokenVal = localStorage.getItem("token");
  const condition = userList?.filter((user) => user.token === tokenVal)?.[0];
  const fnameVar = condition.first_name;
  const lnameVar = condition.last_name;

  const history = useNavigate();
  const userLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedin(false));
    history("/");
  };

  return (
    <div>
      {" "}
      <Navbar fixed="top" className="nav" variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <h2>React-Projects</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="navlink" to="/typing">
                    Typing
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/toggle">
                    Toggle
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/billing">
                    Billing
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/increment">
                    Increment
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/clone">
                    Clone
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/converter">
                    Converter
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/moviedb">
                    Movie App
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/context">
                    Context
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="navlink" to="/rtk">
                    Redux-Toolkit
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link className="link" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Button onClick={userLogout} variant="danger">
                LogOut
              </Button>
              <Navbar.Text className="justify-content-end">
                <span className="inline">
                  {fnameVar} {lnameVar}
                </span>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

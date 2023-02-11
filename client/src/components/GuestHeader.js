import React, { useContext, useState } from "react";
import { Container, Navbar, Nav, NavItem, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const GuestHeader = ({ user, updateUser }) => {
    const [login, setLogin] = useState(false)
    const history = useHistory()
    const handleClick = () => {
       setLogin(!login)
    }



    console.log(login)
    return (<>
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
            <Container>
                <Navbar.Brand className="brand" href="/">
                    Wine O'Clock

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end ms-auto" activeKey="/home">
                        <Nav.Item  className="nav-link">
                            <NavLink onClick={handleClick} className="nav-link" to={login ? "/login" :"/signup"}>
                                {login ? "Login!": "Signup!"}
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default GuestHeader

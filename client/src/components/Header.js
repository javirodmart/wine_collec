import React, { useState } from "react";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {


    const navInfo = [
        {
            id: 1,
            path: '/',
            name: 'Home'
        },
        {
            id:2,
            path: '/myWine',
            name: 'MY Wines'
        },
        {
            id:3,
            path: "/add_wine",
            name: "Add wine"
        },
        {
            id:4,
            path:"/signup",
            name:"Signup"
        },
        {
            id:4,
            path:"/login",
            name:"Login"
        }
    ]
    return (<>
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
            <Container>
                <Navbar.Brand className="brand" href="/">
                    Wine O'Clock

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end ms-auto" activeKey="/home">
                        {navInfo.map((item) => (
                            <>
                                <Nav.Item key={item.id} className="nav-link">
                                    <NavLink className="nav-link" to={item.path} key={item.id}>
                                        {item.name}
                                    </NavLink>
                                </Nav.Item>
                            </>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Header
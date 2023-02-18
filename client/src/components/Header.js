import React, { useContext, useState } from "react";
import { Container, Navbar, Nav, NavItem, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = ({ user, updateUser }) => {
    const history = useHistory()
    const navInfo = [
        {
            id: 5,
            path: `/home/${user.id}`,
            name: "Home"
        },
        {
            id: 1,
            path: `/dashboard/${user.id}`,
            name: 'Cellar'
        },
        {
            id: 2,
            path: `/all_wines`,
            name: 'Wines'
        },
        {
            id: 3,
            path: "/all_brands",
            name: "Brands"
        },
        {
            id: 4,
            path: "/all_locations",
            name: "Region"
        },
        
    ]
    console.log(user.img_url)

    const handleLogOut = () => {
        // DELETE `/logout`
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    updateUser(null)
                    history.push('/login')
                }
            })
        updateUser(null)
    }
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
                        <Nav.Item className="nav-link">
                            <NavLink className="nav-link" to="">
                                <Button className="logout" style={{ color: "black" }} onClick={handleLogOut}>Sign Out</Button>
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Header

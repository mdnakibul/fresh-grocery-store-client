import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../images/Group 33072.png'
const Navigation = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <Navbar expand="lg" className="mb-3">
            <Container className="border-bottom">
                <Navbar.Brand href="/home"><img src={logo} alt="Logo" style={{ maxWidth: '120px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/blog" className="nav-link">Order</Link>
                        <Link to="/admin" className="nav-link">Admin</Link>
                        <Link to="/home" className="nav-link">Deals</Link>
                        {
                            loggedInUser.email ? <b>{loggedInUser.name}</b> : <Link to="/login" className="nav-link">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
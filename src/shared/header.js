import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserSecret } from "react-icons/fa";
import { Link } from 'react-router-dom';
//import { Button } from 'react-bootstrap';

function Header() {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/"><Navbar.Brand>SW_React</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/home"><Nav.Link>Home</Nav.Link></Link>
                        <Link to="/about"><Nav.Link>About</Nav.Link></Link>

                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <Link to="/courses"> <NavDropdown.Item>course 1 </NavDropdown.Item></Link>
                            <Link to="/courses"> <NavDropdown.Item>course 2 </NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to="/courses"> <NavDropdown.Item>All Courses </NavDropdown.Item></Link>
                        </NavDropdown>

                        <Nav.Link className="border rounded-circle" href="#link"> <FaUserSecret /></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    </>);
}

export default Header;
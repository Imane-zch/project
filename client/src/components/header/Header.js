import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import Logo2 from "../../assets/logo2.png"
import '../../style/Header.css'
import '../../style/index.css'
import HeaderLogin from '../../App.css'


function Header() {
  return (
        <Navbar key={false} expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
			<img
			src={Logo2} 
			alt= "MindFlow logo" 
			className="mfl-logo"
			width="49" 
			height="40"
			/>
			</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
              className="headerbar"
			  style={{fontSize:"20px"}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavheaderbarbarLabel-expand-false`}>
                  MindFlow
				  <img
			src={Logo2} 
			alt= "MindFlow logo" 
			className="mfl-logo"
			width="40" 
			height="30"
			/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Profile</Nav.Link>
                  <Nav.Link href="#action2">Settings</Nav.Link>
				  <Nav.Link href="#action3">Log out</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default Header;

// <div className="justify-content-end">
// <Navbar.Text>
// Signed in as: <a href="#login">Buffy Summers</a>
// </Navbar.Text>
// </div>
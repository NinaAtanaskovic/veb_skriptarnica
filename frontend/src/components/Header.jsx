import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    
    <header> 
        <Navbar bg= "primary" varient= "dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand >
                <img src={logo} alt="Ftn skriptarnica logo" width="30" height="30" className="d-line-block align-top me-2"></img>
                <span className="fw-bold"> SKRIPTARNICA </span>
                Fakultet tehnickih nauka u Novom Sadu
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                        <Nav.Link href="/cart">
                        <FaShoppingCart /> Korpa
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                            <Nav.Link href="login">
                                <FaUser /> Prijava
                            </Nav.Link>
                            </LinkContainer>
                    </Nav>
                    </Navbar.Collapse> 
                
               
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
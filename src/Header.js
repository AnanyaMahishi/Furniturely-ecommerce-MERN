import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <div className='header'>
      <Navbar>
          <Container>

            <LinkContainer to="/">
              <Navbar.Brand><img className="header_logo" src={require("./logo.jpeg")} alt=""/></Navbar.Brand>
            </LinkContainer>

            <Nav className="me-auto  w-100  justify-content-end">

              <IconButton id="icon">
                <ShoppingCartIcon/>
              </IconButton>

              <Link to="/login" className="nav-link">
                <IconButton id="icon">
                  <AccountCircleIcon  />
                </IconButton>
              </Link>

            </Nav>
            
          </Container>
      </Navbar> 
      
    </div>
  )
}

export default Header

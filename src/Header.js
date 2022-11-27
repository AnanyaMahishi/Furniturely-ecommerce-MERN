import React, { useContext } from 'react'
import "./Header.css"
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import {  Nav, NavDropdown } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

import { Store } from './Store';

function Header() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/login';
  };

  return (
    <div className='header'>
      <Navbar>
          <Container>

            <LinkContainer to="/">
              <Navbar.Brand><img className="header_logo" src={require("./logo.jpeg")} alt=""/></Navbar.Brand>
            </LinkContainer>
            <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <NavDropdown title=" Products" id="nav-dropdown">
                <NavDropdown.Item href="/livingroom">Living Room</NavDropdown.Item>
                <NavDropdown.Item  href="/dining">Dining</NavDropdown.Item>
                <NavDropdown.Item href="/bedroom">Bed Room</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            </Nav>
            <div class="input-group w-25  rounded-pill bg-light">
              <input type="search" class="form-control rounded-pill border border-light  bg-light " placeholder='Search' aria-label='Search' aria-describedby='search-addon' />
              <button type="button" class="btn  btn-light rounded-pill border  border-0"><SearchIcon/></button>
            </div>
            <Nav>
              <Link to="/mycart" className="nav-link">
                <IconButton id="icon">
                  <ShoppingCartIcon/>
                </IconButton>
              </Link>

              {
              userInfo ? 
                (
                    <NavDropdown title={userInfo.name} id="nav-dropdown">

                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>

                      <NavDropdown.Divider />

                      <Link className="dropdown-item" to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>

                    </NavDropdown>
                ) : 
                
                (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                )
              
              }

            </Nav>
            
          </Container>
      </Navbar> 
      
    </div>
  )
}

export default Header


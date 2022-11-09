import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
     <a href="/"> <img className="header_logo" src={require("./logo.png")} alt=""/></a> 
    <a href="/">Furniturely</a>
    <IconButton id="icon">
        <ShoppingCartIcon/>
    </IconButton>
    <IconButton id="icon">
        <AccountCircleIcon  />
    </IconButton>
    </div>
  )
}

export default Header

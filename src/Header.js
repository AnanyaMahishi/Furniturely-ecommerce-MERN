import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
    <img className="header_logo" src={require("./logo.png")} alt=""/>
    
    <IconButton>
        <ShoppingCartIcon/>
    </IconButton>
    <IconButton>
        <AccountCircleIcon  />
    </IconButton>

    
    </div>
  )
}

export default Header

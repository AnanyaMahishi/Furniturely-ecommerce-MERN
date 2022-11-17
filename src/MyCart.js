import React from 'react'

import { Link } from 'react-router-dom'
import CartItem from './CartItem'
function MyCart() {
  return (
    <div className='mycart'>
      <div className='cart__right'>
        <div className='cart__info'>
            <p>Subtotal(0) items</p>
            <p>221</p>
        </div>
        <div>
          <Link to="/checkout"><button>Checkout</button></Link>
        </div>
      </div>
      <div className='cart__left'>
      <CartItem/>
      </div>
    </div>
  )
}

export default MyCart

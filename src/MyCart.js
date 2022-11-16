import React from 'react'
import "./MyCart.css"
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
            <button>Checkout</button>
        </div>
      </div>
      <div className='cart__left'>
      <CartItem/>
      </div>
    </div>
  )
}

export default MyCart

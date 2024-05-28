import React from 'react'
import { useContext } from 'react'
import { context } from '../App'


const Header = () => {
const {cart} = useContext(context)

  return (
    <div>
      <header>
            <h1>Ecommerce</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/product">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href=""> Cart {cart.length} </a></li>
            </ul>
        </header>
    </div>
  )
}

export default Header

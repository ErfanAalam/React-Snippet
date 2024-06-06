import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from '../App'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Nightlight } from '@mui/icons-material';


const Header = () => {
  const { cart, login, setLogin } = useContext(context)

  const [darkmode, setDarkMode] = useState(true)

  return (
    <div>
      <div className="upper">
        <div className="auth">
          {login === null ? (
            <>
              <a href="/signin">Sign in/Guest</a>
              <a href="/signup">Create Account</a>
            </>
          ) : (
            <>
              <a href="/signin">Hello, {login}</a>
              <a href="/signup">Sign out</a>
            </>
          )}

        </div>
      </div>
      <header>
        <h1>Ecommerce</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="headerright">
          <span onClick={() => setDarkMode(!darkmode)}>
            {
              darkmode ? <Nightlight /> : <LightModeIcon />
            }
          </span>
          <a href=""> <ShoppingCartIcon />  {cart.length} </a>
        </div>
      </header>
    </div>
  )
}

export default Header

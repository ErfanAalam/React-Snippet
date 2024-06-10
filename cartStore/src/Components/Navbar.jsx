import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from './CartProvider';

const Navbar = () => {


    const {products,cartLength} = useContext(cartContext)

  return (
    <div>
      <div className="navbar flex justify-between p-10 bg-blue-400">
        <h1 className='text-[40px]'>Cart Store</h1>
        <i className='text-24'><ShoppingCartIcon fontSize='large' /> {cartLength} </i>
      </div>
    </div>
  )
}

export default Navbar

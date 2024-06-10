import React, { useContext, useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { cartContext } from './CartProvider';



const CartItem = () => {

    const {products,handleRemove,totalPrice , handleDecrement, handleIncrement} = useContext(cartContext)
    
    return (
         <div className=''>
            <h1 className='text-center text-5xl mt-20'>Cart Items</h1>
            <div className='p-20'>
                {
                    products.map((product) => {
                        return <div className='flex gap-40 p-10' >
                            <img src={product.img} width={"400px"} alt="hello" />
                            <div className=' flex flex-col justify-center items-center'>
                                <h1>{product.title}</h1>
                                <p>{product.price}</p>
                                <button onClick={() => { handleRemove(product.id) }} className='border-2 p-2 bg-gray-400'>Remove item</button>
                            </div>
                            <div className='flex flex-col justify-evenly'>
                                <button onClick={()=> handleIncrement(product.id)}> <KeyboardArrowUpIcon fontSize='large' /> </button>
                                <h1 className='text-center'> 1 </h1>
                                <button onClick={()=> handleDecrement(product.id)}> <KeyboardArrowDownIcon fontSize='large' /> </button>
                            </div>
                        </div>
                    })
                }
                <hr className='mx-20 mb-10 border-2 border-black' />
                <div className='flex justify-between px-48'>
                <h1 className='mx-20 font-700 text-[30px] '>Grand Total</h1>
                <h1 className='text-[34px] mx-96'>{totalPrice}</h1>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem

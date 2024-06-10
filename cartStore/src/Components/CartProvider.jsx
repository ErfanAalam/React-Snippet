import React, { createContext, useState, useEffect } from 'react'
import App from '../App';
import data from './data';

export const cartContext = createContext()

const CartProvider = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [cartLength, setCartLength] = useState(0)
    let totalAmount = 0

    // const url = "https://www.course-api.com/react-useReducer-cart-project";

    useEffect(() => {
        //     fetch(url).then(async (response) => {
        //         let data = await response.json();
        //         setProducts(data);
        //     });

        // data.map((product) => {
        //     setProducts(product)
        // })
        // console.log(products);
        setProducts(data)
    }, []);


    useEffect(() => {
        let sum = 0
        products.forEach((product) => {
            sum += product.amount
        })
        setCartLength(sum)
    }, [products])


    // useEffect(() => {
    //     let amount = 0
    //     products.forEach((product) => {
    //         amount += product.price * product.amount
    //     })
    //     setTotalAmount(amount)
    // })


    const handleIncrement = (prod) => {
        let amount = products.find((product) => {
            return product == prod
        })

        amount.amount += 1
        console.log(prod);

        let sum = 0
        products.forEach((product) => {
            sum += product.amount
        })
        setCartLength(sum)
    }

    const handleDecrement = (prod) => {
        let amount = products.find((product) => {
            return product == prod
        })

        amount.amount == 1 ? 1 : amount.amount -= 1

        let sum = 0
        products.forEach((product) => {
            sum += product.amount
        })
        setCartLength(sum)
    }

    const handleClearCart = () => {
        setProducts([])
    }

    const handleRemove = (id) => {
        let finalProduct = products.filter((product) => product.id !== id);
        setProducts(finalProduct);
    };

    products.map((product)=>{
        totalAmount += product.amount * product.price
    })



    return (
        <cartContext.Provider value={{ products, handleRemove, totalAmount, handleDecrement, handleIncrement, cartLength, handleClearCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider

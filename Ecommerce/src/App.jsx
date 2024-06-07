import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Blog from './Components/Blog.jsx';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Product from './Components/Product.jsx';
import Contact from './Components/Contact.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Parent from './Components/Parent.jsx';
import { useState, createContext } from 'react';
import Home from './Components/Home.jsx';
import Signup from './Components/Signup.jsx';
import Signin from './Components/Signin.jsx';


export const context = createContext()

function App() {

  const [cart, setCart] = useState([])
  const [cartItem, setCartItem] = useState([])

  const [login, setLogin] = useState(null)


  function handleAddtoCart(e, product) {
    e.preventDefault()
    setCart([...cart, product])
    setCartItem([...cartItem, product])
    // localStorage.clear()
    localStorage.setItem("cartitem",JSON.stringify(cartItem))
    // console.log(cart);
  }

  function isAddToCart(id) {
    const isProductAdded = cart.find((addedproduct) => { return addedproduct.id === id })
    if (isProductAdded) {
      return true
    } else {
      return false
    }

  }

  function HandleRemoveFromCart(e, id) {
    e.preventDefault()
    setCart(cart.filter((addedProduct) => {
      return addedProduct.id !== id
    }))
    setCartItem(cartItem.filter((addedProduct) => {
      return addedProduct.id !== id
    }))
    // localStorage.clear()
    localStorage.setItem("cartitem",JSON.stringify(cartItem))


  }

  return (
    <context.Provider value={{ cart, setCart, handleAddtoCart, isAddToCart, HandleRemoveFromCart,login, setLogin }}>
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/product' element={<Parent />}>
            <Route index element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} > </Route>
          </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/blog' element={<Blog />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/signup' element={<Signup />}> </Route>
          <Route path='/signin' element={<Signin />}> </Route>
        </Routes> 

      </Router>
      
    </context.Provider>
  )

}

export default App

import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Blog from './Components/Blog.jsx';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Product from './Components/Product.jsx';
import Contact from './Components/Contact.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Parent from './Components/Parent.jsx';
import { useState, createContext, useEffect } from 'react';
import Home from './Components/Home.jsx';
import Signup from './Components/Signup.jsx';
import Signin from './Components/Signin.jsx';
import Cart from './Components/Cart.jsx';


export const context = createContext()

function App() {

  let name = localStorage.getItem("name")
  const [login, setLogin] = useState(null)

  const [cartItem, setCartItem] = useState(
    localStorage
      ? localStorage.getItem(name) === null
        ? []
        : JSON.parse(localStorage.getItem(name))
      : []
  )


  
  useEffect(() => {

    name && localStorage.setItem(name, JSON.stringify(cartItem))


  }, [cartItem])

  function handleAddtoCart(e, product) {
    e.preventDefault()
    setCartItem([...cartItem, product])

  }

  function isAddToCart(id) {
    const isProductAdded = cartItem.find((addedproduct) => { return addedproduct.id === id })
    if (isProductAdded) {
      return true
    } else {
      return false
    }

  }

  function HandleRemoveFromCart(e, id) {
    e.preventDefault()
    setCartItem(cartItem.filter((addedProduct) => {
      return addedProduct.id !== id
    }))


  }

  return (
    <context.Provider value={{ handleAddtoCart, isAddToCart, HandleRemoveFromCart, login, setLogin, cartItem }}>
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
          <Route path='/cart' element={<Cart />}> </Route>
        </Routes>

      </Router>

    </context.Provider>
  )

}

export default App

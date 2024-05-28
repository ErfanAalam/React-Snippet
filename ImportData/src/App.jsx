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


export const context = createContext()

function App() {

  const [cart, setCart] = useState([])


  function handleAddtoCart(e, product) {
    e.preventDefault()
    setCart([...cart, product])
    console.log(cart);
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
  }

  return (
    <context.Provider value={{ cart, setCart, handleAddtoCart, isAddToCart, HandleRemoveFromCart }}>
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Product />}> </Route>
          <Route path='/product' element={<Parent />}>
            <Route index element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} > </Route>
          </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/blog' element={<Blog />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
        </Routes>

      </Router>
    </context.Provider>
  )

}

export default App

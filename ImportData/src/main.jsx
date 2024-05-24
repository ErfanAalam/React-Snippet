import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Blog from './Components/Blog.jsx';
import Header from './Header.jsx';
import About from './Components/About.jsx';
import Product from './Components/Product.jsx';
import Contact from './Contact.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Parent from './Components/Parent.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    
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
)

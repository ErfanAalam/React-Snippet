import './App.css'
import CartItem from './Components/CartItem'
import CartProvider from './Components/CartProvider'
import Navbar from './Components/Navbar'


function App() {
  return (
    <CartProvider>
      <Navbar />
      <CartItem />
    </CartProvider>
  )
}

export default App

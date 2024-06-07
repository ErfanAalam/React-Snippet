import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../App';




const Product = () => {
  
  const [products, setProduct] = useState([])
  const { handleAddtoCart, isAddToCart, HandleRemoveFromCart } = useContext(context)


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then(result => {
        // console.log(result);
        setProduct(result)
      })
  }, [])

  const truncate = (title) => {
    if (title.length > 30) {
      title = title.slice(0, 30) + "..."
    }
    return title
  }


  return (
    <>
      <h1>Products</h1>

      <main>
        {
          products.map((product, index) => {
            return (<div className='wrapper' key={index}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} width={"300px"} height={"300px"} alt="" />
              </Link>
              <h2>{truncate(product.title)}</h2>
              <h3>Price : {product.price} $</h3>
              <h3>Rating : {product.rating.rate}</h3>

              <h3>
                {isAddToCart(product.id) ?
                  <Link
                    className='cart'
                    onClick={(e) => HandleRemoveFromCart(e, product.id)}
                  > Remove From the cart
                  </Link>
                  :

                  <Link
                    className='cart'
                    onClick={(e) => handleAddtoCart(e, product)}
                  > Add to Cart
                  </Link>
                }
              </h3>

            </div>)
          })
        }
      </main>
    </>
  )
}

export default Product

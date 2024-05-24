import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProduct] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then(result => {
        console.log(result);
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
              <h3>Price : {product.price}</h3>
              <h3>Rating : {product.rating.rate}</h3>
              <h2 className='cart'>Add to Cart</h2>
            </div>)
          })
        }
      </main>
    </>
  )
}

export default Product

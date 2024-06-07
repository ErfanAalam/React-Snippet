import React, { useEffect, useState } from 'react'

const Cart = () => {
    let name = localStorage.getItem("name")

    const[cartProduct, setCartProduct] = useState([])

    useEffect(()=>{
        setCartProduct(JSON.parse(localStorage.getItem(name)));
    },[])

    console.log(cartProduct);

    const truncate = (title) => {
        if (title.length > 120) {
          title = title.slice(0, 120) + "..."
        }
        return title
      }
    

  return (


    <div>
      {
       cartProduct && cartProduct.map((product,index)=>{
            return <div className='cartproduct' key={index} style={{width:"500px"}}>
                <img src={product.image} alt="" width={"300px"} height={"400px"} />
            <h1>{product.title}</h1>
            <p className="cartdesc">{truncate(product.description)}</p>
            <h3 className="price">{product.price}</h3>
            <h3 className="rating">{product.rating.rate}</h3>
            </div>
        })
      }
    </div>
  )
}

export default Cart

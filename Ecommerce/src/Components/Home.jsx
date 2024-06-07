import React from 'react'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../App';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate()

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
            <div className="home">
                <div className="left">
                    <h2>We are changing the way people shop</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit quo excepturi fugiat facere atque placeat voluptatum vel veritatis nam!</p>
                    <button onClick={()=> navigate('/product')}>Our products</button>
                </div>
                <div className="right">
                    <img src="public\homeimg1.webp" alt="" />
                </div>
            </div>
            <hr />
            <div className="homeProducts">
                <h1>Featured Products</h1>

                <main>
                    {
                        products.map((product, index) => {
                            return (<div className='wrapper' key={index}>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} width={"300px"} height={"300px"} alt="" className='wrapperimage' />
                                </Link>
                                <h2>{truncate(product.title)}</h2>
                                <h3>Price : {product.price} $</h3>
                                <h3>Rating : {product.rating.rate}</h3>

                            </div>)
                        })
                    }
                </main>

            </div>

        </>
    )
}

export default Home

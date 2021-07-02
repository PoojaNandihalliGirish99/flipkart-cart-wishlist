import React, { useState } from "react";
import Navbar from "./Navbar";
import data from "./data.json"

const Products = (props) => {
    const [products, setProducts] = useState(data);
    const [cartProducts, setCartProducts] = useState([]);

    const handleAddToCart = (product) =>{
        var cartprods = [...cartProducts, product];
        setCartProducts(cartprods);
    }
    localStorage.setItem('products', JSON.stringify(cartProducts));
    console.log(JSON.stringify(cartProducts));




    return (
        <div>
        <Navbar/>
            <h2 className="text-center">Products</h2>
            <div className="row">
                <div className="col">
                <div  className="movie-container">
                    {products.map((product, index) => {
                        return (
                                <div key={index} className="card movie" style={{ width: "18rem" }}>
                                    <img src={product.imgSrc} className="card-img-top" alt="..." height="350px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.brand}</p>
                                        <h5 className="card-title">₹ {product.price}</h5>
                                        <button onClick={()=>{
                                            handleAddToCart(product);
                                        }
                                    }
                                        className="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                        );
                    })}
                    </div>
                </div>
                
            </div>
        </div>
        );
}

export default Products;
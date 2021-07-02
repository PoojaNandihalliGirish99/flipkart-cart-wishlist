import React, { useState } from "react";
import { increaseQuantity, decreaseQuantity, cartDiscountPrice, removeFromCart, saveToList } from "./carthelper";
import Navbar from "./Navbar";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('products')));
    const [savedItems, setsavedItems] = useState([]);
    localStorage.setItem('saved', JSON.stringify(savedItems));

    const [totalPrice, settotalPrice] = useState(cartDiscountPrice().totalprice);
    const [totalDiscount, settotalDiscount] = useState(cartDiscountPrice().totaldiscount);
    const [amount, setamount] = useState(cartDiscountPrice().amount);

    const handleAllPrices = () => {
        settotalPrice(cartDiscountPrice().totalprice);
        settotalDiscount(cartDiscountPrice().totaldiscount);
        setamount(cartDiscountPrice().amount);  
    }
    const handleIncrease = (prodId) => {
        setCartProducts(increaseQuantity(prodId));
        handleAllPrices();
    }

    const handleDecrease = (prodId) => {
        setCartProducts(decreaseQuantity(prodId));
        handleAllPrices();
    }

    const handleRemove = (prodId) => {
        setCartProducts(removeFromCart(prodId));
        handleAllPrices();
    }

    const handleSaved = (prod) => {
        var savedProd = [...savedItems, prod];
        setsavedItems(savedProd);
        handleRemove(prod.id);
    }

    return ( 
        <div>
        <Navbar/>
        <div className="row">
        <div className="col-8">
       
        <div className="mx-5 mt-2">
                        {cartProducts.map((product, index) => {
                            let x = (((product.discount) / 100) * (product.price));
                            let dp = product.price - x ;
                            return (
                                
                                <div key={index} className="row mt-4">
                                <div className="col-2">
                                <img src={product.imgSrc} className="card-img-top"/>
                                </div>
                                <div className="col-3">
                                <div  className="card" style={{ width: "40rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.brand}</p>
                                            <div>
                                            <button onClick={
                                                ()=>{handleDecrease(product.id)}
                                            }
                                            className="btn btn-info"
                                            >-</button>
                                            <span className="col-2 px-3">{product.quantity}</span>
                                            <button onClick={
                                                ()=>{handleIncrease(product.id)}
                                            }
                                            className="col-1 btn btn-info"
                                            >+</button>
                                            </div>
                                            <div className="row">
                                            <div className="col-3">
                                            <span className="card-title" style={{textDecoration:"line-through"}}>₹{product.price}
                                            </span>
                                            <span>{" ₹" + dp}</span>
                                            </div>
                                            <div className="col-5">
                                            <span className="card-title" style={{color:"green"}} >{" -Off " +product.discount}%</span>
                                            </div>
                                            <div className="col-4 d-flex justify-content-between">
                                            
                                            <button onClick={()=>{handleRemove(product.id)}}
                                            className="btn btn-danger">Remove</button>
                                            <button onClick={()=>{handleSaved(product)}}
                                            className="btn btn-info ms-2">Save</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                                    </div>
                            );
                        })}
                        </div>
                       
        </div>
        <div className="col-4 mt-4">
        <h5></h5>
        <div className="card me-3">
						<div className="card-header">Price Details</div>
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<h6>Price :</h6>
								<h6 className="text-dark">Rs. {totalPrice}</h6>
							</div>
							<div className="d-flex justify-content-between">
								<h6>Discount :</h6>
								<h6 className="text-success"> - Rs. {amount}</h6>
							</div>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-between">
								<h6>Total Amount :</h6>
								<h6 className="text-dark"> Rs. {totalDiscount}</h6>
							</div>
						</div>
                        </div>
                        </div>

       
       </div>
        </div> );
}
 
export default Cart;
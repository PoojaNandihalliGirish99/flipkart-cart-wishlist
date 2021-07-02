import React,{useState} from "react";
import Navbar from "./Navbar";


const SavedItemsList = () => {
    const [savedProducts, setsavedProducts] = useState(JSON.parse(localStorage.getItem('saved')));

   
    return ( 
        <div>
        <Navbar/>
        <div>
        {savedProducts && savedProducts.map((product, index) => {
            let x = (((product.discount) / 100) * (product.price));
            let dp = product.price - x ;
            return (
                
                <div key={index} className="row mt-4 mx-5">
                <div className="col-1">
                <img src={product.imgSrc} className="card-img-top"/>
                </div>
                <div className="col-3">
                <div  className="card" style={{ width: "40rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.brand}</p>
                            
                            <div className="row">
                            <div className="col-3">
                            <span className="card-title" style={{textDecoration:"line-through"}}>₹{product.price}
                            </span>
                            <span>{" ₹" + dp}</span>
                            </div>
                            <div className="col-5">
                            <span className="card-title" style={{color:"green"}} >{" -Off " +product.discount}%</span>
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
        );
}
 
export default SavedItemsList;
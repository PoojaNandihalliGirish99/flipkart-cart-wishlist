import React from "react";
import { Link } from "react-router-dom";




function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     
      <div className="d-flex justify-content-end">
        <Link to="/" className="nav-link text-dark fw-bold">Home</Link>

        <Link to="/saved" className="nav-link text-dark fw-bold">WishList</Link>
        
        <button className="btn btn-primary">

        <Link to="/cart" className="nav-link text-white fw-bold">Cart</Link>
        </button>

      </div>
  </div>
</nav>


  )
}

export default Navbar;
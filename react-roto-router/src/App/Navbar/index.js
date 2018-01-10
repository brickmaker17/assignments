import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(props){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
        </div>
    )
}

export default Navbar;
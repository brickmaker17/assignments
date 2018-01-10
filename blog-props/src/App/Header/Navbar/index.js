import React, { Component } from 'react'
import "./index.css";

function Navbar(props){
    return (
        <nav>
            <div>
                <a href="http://">Start Bootstrap</a>
            </div>
            <ul>
                <li><a href="http://">Home</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Sample Post</a></li>
                <li><a href="http://">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
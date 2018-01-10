import React, { Component } from 'react';
import Navbar from "./Navbar";
import "./index.css";
import './Img/home-bg.jpg';

function Header(props){
    return(
        <header>
            <Navbar></Navbar>
            <h1 className="headcent">Clean Blog</h1>
            <h4 className="headcent">A Blog Theme by Start Bootstrap</h4>
        </header>
    )
}

export default Header;
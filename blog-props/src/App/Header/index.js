import React, { Component } from 'react';
import Navbar from "./Navbar";
import "./index.css";
import './Img/home-bg.jpg';

function Header(props) {
    return (
        <header>
        <div className="overlay">
            <Navbar></Navbar>
            
            <div className="center-text">
                <h1 className="headcent">Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
            </div>
        </header>
    )
}

export default Header;
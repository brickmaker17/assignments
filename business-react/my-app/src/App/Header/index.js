import React, {Component} from "react";
import './index.css';

function Header(props){
    return (
        <header className = "wrapper">
            <div className = "text-wrapper">
                <a className = "logo" href="#"></a>
                <h1 className = "whatEver" >Header</h1>
            </div>
        </header>
    )
}

export default Header;
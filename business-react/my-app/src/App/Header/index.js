import React, {Component} from "react";
import './index.css';

function Header(props){
    return (
        <header className = "wrapper">
            <div className = "text-wrapper">
                <a className = "logo" href="#">LOGO</a>
            </div>
            <div>
               <nav>
                   <a href="http://">About</a>
                   <a href="http://">Contact</a>
                   <a href="http://">Blog</a>
               </nav>
            </div>
            <form action="">
            <input type="text" value="Search"/>
            </form>
        </header>
    )
}

export default Header;
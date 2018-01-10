import React, {Component} from "react";
import './index.css';

function Footer(props){
    return (
        <footer style = {{backgroundColor: props.color}}>
            <h1>This is a footer</h1>
        </footer>
    )
}

export default Footer;
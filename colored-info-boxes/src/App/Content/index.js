import React, {Component} from "react";
import './index.css';

function Content(props){
    
    return (
        <div style = {{color: props.color}}>
           <h1>Title</h1>
           <h3>Subtitle</h3>
           <p>information and stuff</p>
        </div>
       
    )
}

export default Content;
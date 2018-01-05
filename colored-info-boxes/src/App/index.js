import React, {Component} from "react";
import Content from "./Content";
import Header from "./Header";
import './index.css';

function App(props) {
  
    return (
        <div>
           <Header ></Header>
           <Content color = "blue" ></Content>
           <Content color = "green" ></Content>
           <Content color = "pink" ></Content>
           <Content color = "greenyellow" ></Content>  
           <Content color = "violet" ></Content>
           <Content color = "orange" ></Content>
           <Content color = "antiquewhite" ></Content>
           <Content color = "royalblue" ></Content>
           <Content color = "darkcyan" ></Content>
           <Content color = "aqua" ></Content>
        </div>
    )
}
export default App;
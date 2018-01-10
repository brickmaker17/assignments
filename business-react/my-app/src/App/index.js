import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";

function App(props) {
    return (
        <div>
           <Header></Header>
           <Footer color = "blue"></Footer>
        </div>
    )
}
export default App;
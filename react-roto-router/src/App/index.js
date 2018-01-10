import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App(props) {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
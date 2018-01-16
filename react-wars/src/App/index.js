import React from 'react'
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Person from "./Person";
import "./index.css";

function App(props){
    return(
        <div>
            <Header/>
        <div className="app-wrapper">
            <SideBar />
            <Switch>
                <Route path="/person/:id" component={Person}/>
                
            </Switch>
        </div>
        </div>
    )
}
export default App;
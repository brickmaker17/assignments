import React, { Component } from "react";
import "./index.css";
import SuperHero from "./SuperHero/";
import superheroes from "../shared/heroes.json";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            superheroes: superheroes
        }
        this.display = this.display.bind(this);
    }
    display(i) {
        alert(this.state.superheros[i].catchphrase);
    }
    render() {

        let { superheroes } = this.state;
        return (
            <div>
                {superheroes.map((hero, index) => {
                    return <SuperHero key={index}{...hero} index={index} display={this.display} />
                })}
            </div>
        )
    }
}

export default App;
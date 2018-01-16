import React, {Component} from 'react';
import "./index.css";

import axios from "axios";
const colUrl = "http://www.colr.org/json/color/random";

class Colors extends Component{
    constructor() {
        super();
        this.state = {
            color: "blue",

        }
    }
    
    componentDidMount(){
        axios.get(colUrl)
            .then(response => {
                let {hex} = response.data.colors[0];
                this.setState({
                    color: `#${hex}`
                })
            });
    }
    render(){
        let {color} = this.state;
        let divStyle = {backgroundColor: color};
        return (
            <div className="box" style={divStyle}>
                {color}
            </div>
        )
    }
}

export default Colors;
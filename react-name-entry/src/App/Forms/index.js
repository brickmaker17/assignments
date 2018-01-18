import React, { Component } from 'react';
import {connect} from "react-redux";
import {addData} from "../../Redux";

import Name from './Name';
class Forms extends Component{
    constructor(props){
        super(props)
        let {name} = props;
        this.state = {
            data: [],
            inputs: {
                name: name || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleChange(e) {
    let {name, value} = e.target;
    this.setState((prevState) => {
        return {
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }
    });
}
handleSubmit(e){
    e.preventDefault();
    this.setState((prevState)=>{
        return{
            data: [...prevState.data, this.state.inputs.name]
        }
    })
}
clearInputs(){
    this.setState({
        inputs: {
            name: ""
        }
    });
}
render(){
    let {name} = this.state.inputs;
    let {data} = this.state;
    return (
        <div>
            <h1>{name}</h1>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={name} name='name' placeholder='name' type="text"/>
            <button>Submit</button>
            <Name data={data}/>
        </form>
        </div>
    )
}
}
export default connect(state => state, {addData})(Forms);


import React, { Component } from 'react';
import {connect} from "react-redux";
import {addData} from "../../Redux/things";
import Things from "./Things";

class Form extends Component{
    constructor(){
        super();
        this.state = {
            inputs: {
                title: '',
                img: '',
                desc: ''
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
       this.props.addData(this.state.inputs)
        this.setState((prevState)=>{
            return{
                inputs: {
                    title: '',
                    img: '',
                    desc: ''
                }
            }
        })
        
    }
    
    render(){
        let {name} = this.state.inputs;
        let {data} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.inputs.title} name='title' placeholder='Title' type="text"/>
                    <input onChange={this.handleChange} value={this.state.inputs.img} name='img' placeholder='Img URL' type="text"/>
                    <input onChange={this.handleChange} value={this.state.inputs.desc} name='desc' placeholder='Description' type="text"/>
                    <button>Submit</button>
                </form>
                <Things data= {this.props.things}/>
            </div>
        )
    }
}
export default connect(state => state, {addData})(Form);
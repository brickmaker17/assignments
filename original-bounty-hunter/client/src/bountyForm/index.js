import React, { Component } from 'react';
import axios from 'axios';

class BountyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                living: false,
                bountyAmount: 0,
                type: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let { firstName, lastName, living, bountyAmount, type } = this.state.inputs;
           this.setState ((prevState) => {
               return{
                
               }
           })
            axios.post('//localhost:8080/bounties', this.state.inputs)
                .then((response)=> {
                    this.setState({ data: response.data});
                    console.log(response);
                    
            });
    }

    render() {
        console.log(this.state.inputs);
        let { firstName, lastName, living, bountyAmount, type } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Set a bounty</h2>
                    First name: <br />
                    <input onChange={this.handleChange} value={firstName} name="firstName" type="text" placeholder="First Name" />
                    <br />
                    Last name: <br />
                    <input onChange={this.handleChange} value={lastName} name="lastName" type="text" placeholder="Last Name" />
                    <br />
                    Living:
                    <input onChange={this.handleChange} value={living} name="living" type="checkbox" />
                    <br />
                    <input onChange={this.handleChange} value={bountyAmount} name="bountyAmount" type="text" placeholder="Bounty Amount" />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default BountyForm;
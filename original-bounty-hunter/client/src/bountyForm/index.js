import React, { Component } from 'react';
import Bounty from '../Bounty/index';
import axios from 'axios';

class BountyForm extends Component {
    constructor(props) {
        let { firstName, type } = props;
        super(props);
        this.state = {
            inputs: {
                firstName: firstName || "",
                lastName: "",
                living: false,
                bountyAmount: 0,
                type: type || "Sith"
            },
            data: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }
    componentDidMount() {
        axios.get('/bounties')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
    }

    handleChange(e) {
        let { name, value, type, checked } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        })
    }

    clearInputs() {
        this.setState(() => {
            return {
                inputs: {
                    firstName: '',
                    lastName: '',
                    living: false,
                    bountyAmount: 0,
                    type: "Sith"
                }
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/bounties', this.state.inputs)
            .then((response) => {
                this.clearInputs();
                console.log(response.data);

            });
    }

    render() {
        let { firstName, lastName, living, bountyAmount, type } = this.state.inputs;
        return (
            <div>
                    <h2>Set a bounty</h2>
                <form onSubmit={this.handleSubmit}>
                    First name: <br />
                    <input onChange={this.handleChange} value={firstName} name="firstName" type="text" placeholder="First Name" />
                    <br />
                    Last name: <br />
                    <input onChange={this.handleChange} value={lastName} name="lastName" type="text" placeholder="Last Name" />
                    <br />
                    Living:
                <input onChange={this.handleChange} checked={living} name="living" type="checkbox" />
                    <select value={type} onChange={this.handleChange} name="type">
                        <option value="Sith">Sith</option>
                        <option value="Jedi">Jedi</option>
                    </select>
                    <br />
                    Price:
                    <input onChange={this.handleChange} value={bountyAmount} name="bountyAmount" type="text" placeholder="Bounty Amount" />
                    <button >Submit</button>
                </form>
                <div>
                    {this.state.data.map((hits, i) => <Bounty key={i} hits={hits}></Bounty>)}
                </div>
            </div>
        )
    }
}

// <Bounty hits= {hits} ></Bounty>

// Bounty({hits: hits})

export default BountyForm;
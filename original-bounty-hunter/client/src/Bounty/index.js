import React, { Component } from 'react'
import axios from 'axios';
import "../Bounty/bounty.css";

class Bounty extends Component {
    constructor(props) {
        super(props);
        let { hits } = props;
        this.state = {
            hits: {
                firstName: props.hits.firstName || '',
                lastName: props.hits.lastName || '',
                living: props.hits.living || false,
                bountyAmount: props.hits.bountyAmount || 0,
                type: props.hits.type || "Sith"
            }
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleDelete(e) {
        e.preventDefault();
        axios.delete(`/bounties/${this.props.hits._id}`)
            .then((response) => {
                console.log(response);
            })
    }
    handleChange(e) {
        let { value, name } = e.target;
        this.setState((prevState) => {
            return {
                hits: {
                    ...prevState.hits,
                    [name]: value
                }
            }
        })
    }

    handleEdit(e) {
        e.preventDefault();
        axios.put(`/bounties/${this.props.hits._id}`, this.state.hits)
            .then((response) => {
                let { firstName, lastName, living, bountyAmount, type } = response.data;
                this.setState({
                    hits: {
                        firstName, lastName, living, bountyAmount, type
                    }
                })
                console.log(response);
            })
    }

    render() {
        let { hits } = this.state;

        return (
            <div>
                <div>
                    <input  className= "boarder" name="firstName" onChange={this.handleChange} value={hits.firstName} onBlur={this.handleEdit}></input>
                    <br />
                    <input className= "boarder" name="lastName" onChange={this.handleChange} value={hits.lastName} onBlur={this.handleEdit}></input>
                    <p>{hits.living}</p>
                    <select className= "boarder" value={hits.type} onChange={this.handleChange} onBlur={this.handleEdit} name="type">
                        <option value="Sith">Sith</option>
                        <option value="Jedi">Jedi</option>
                    </select>
                    {/* <p>{hits.type}</p> */}
                    <p>{hits.bountyAmount}</p>
                </div>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}



export default Bounty;

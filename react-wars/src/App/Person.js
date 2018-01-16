import React, { Component } from 'react'
import axios from "axios";

class Person extends Component {
    constructor() {
        super();
        this.state = {
            person: {}
        }
    }
    componentDidMount() {
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    person: response.data
                })
            });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`https://swapi.co/api/people/${nextProps.match.params.id}`)
                .then(response => {
                    this.setState({
                        person: response.data
                    })
                });
        }
        
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.person.name}</h1>
                <h2>Eye Color: {this.state.person.eye_color}</h2>
                <h2>Height: {this.state.person.height}</h2>
                <h2>Hair Color: {this.state.person.hair_color}</h2>
                <h2>Gender: {this.state.person.gender}</h2>
            </div>
        )
    }
}

export default Person
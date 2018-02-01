import React, { Component } from 'react';
import axios from "axios";
import BountyForm from "../bountyForm/index";

export default class App extends Component {
    componentDidMount() {
        axios("//localhost:8080/bounties")
            .then((response) => {
                console.log(response.data);
            })
    }
    render() {
        return (
            <div>
                <BountyForm />
            </div>
        )
    }
}


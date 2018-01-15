import React, { Component } from 'react';

import Character from "./Character";

import axios from "axios";
const hUrl = "http://api.vschool.io:6543/hitlist.json";

//when the component mounts, make get request
//when the data comes back, set state to contain data
//display data

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }
    componentDidMount() {
        axios.get(hUrl)
            .then((response) => {
                let { data } = response;
                this.setState({
                    characters: data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })
            })
    }

    render() {
        let { characters, loading, err, errMsg } = this.state;
        return (
            loading ?
                <div>
                    <h1>IM LOADING!!!!!!!!</h1>
                </div>
                :
                err ?
                    <div>
                        <p>Sorry, your data is unavailable. </p>
                        <p>{errMsg}</p>
                    </div>
                    :
                    <div>
                        {characters.map((character, i) => {
                            let {name, image} = character;
                            return <Character key={i} name={name} image={image}></Character>
                        })}
                    </div>
        )
    }
}
export default Characters;

import React, { Component } from 'react'
import Pets from "./Pets";


function Friend(props){
    let {name, age, pets} = props;
    return(
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p><Pets data = {pets}/></p>
        </div>
    )
}

export default Friend;
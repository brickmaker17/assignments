import React, { Component } from 'react'

function Character(props) {
    let { image, name } = props;
    return (
        <div>
           <img src={image} alt=""/>
            <p>{name}</p>
        </div>
    )
}
export default Character;

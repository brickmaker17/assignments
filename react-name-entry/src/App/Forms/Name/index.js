import React from 'react'

function Name(props){
    const dataArr = props.data.map((name, i)=> {
        return <li key={i} name={name}>
            {name}
        </li>
    })
    return(
        <div>
            <ul>
            {dataArr}
            </ul>
        </div>
    )
}
export default Name;


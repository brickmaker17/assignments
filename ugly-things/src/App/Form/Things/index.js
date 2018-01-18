import React from 'react'

function Things(props){
    let {data} = props
    let items = data.map((thing, i)=>(
        <div>
            <h3>{thing.title}</h3>
            <p>{thing.desc}</p>
            <img src={thing.img} alt={thing.title}/>
        </div>
    ))
    return(
        <div>
            {items}
        </div>
    )
}
export default Things;
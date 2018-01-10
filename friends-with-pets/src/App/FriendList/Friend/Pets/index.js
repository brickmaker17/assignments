import React from 'react'

function Pets(props) {
    let { data } = props;
    let poop = data.map((pet, i) => {
        let { name, breed } = pet;
        return (
            <div key={name + i}>
                <p>{name}</p>
                <p>{breed}</p>
            </div>
        )
    })
    return (
        <div>
            {poop}
        </div>
    )
}
export default Pets;

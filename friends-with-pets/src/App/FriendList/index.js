import React, { Component } from 'react'
import Friend from "./Friend";

function FriendList(props){
    let friends = [  
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "spot",
              breed: "tabby"
            },{
              name: "John Johnson",
              breed: "husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "spyynx cat"
            },{
              name: "patches",
              breed: "spyynx cat"
            },{
              name: "tiger",
              breed: "spyynx cat"
            },{
              name: "oscar",
              breed: "spyynx cat"
            }
          ]
        }
      ]
  const poop = friends.map((list, i) => {
    return <Friend key={i} {...list}/>


  })
      return(
        <div>
          {poop}
        </div>
      )
}

export default FriendList;
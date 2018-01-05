function sortedDogOwners(petOwners){
    let dogOwners = arr.filter((petOwner)=>{
      return petOwner.pets.includes("dog");
    });
    return dogOwners.sort((dogOwner1, dogOwner2)=>{
      let age1 = dogOwner1.age;
      let age2 = dogOwner2.age;
      return age1 - age1;
    })
}

let Owners = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
    pets: ["dog", "cat"]
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
    pets: ["dog"]
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
    pets: ["cat", "parrot"]
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13,
    pets: ["cat", "parrot", "dog"]
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
    pets: ["dog"]
  }
]
console.log(sortedDogOwners(Owners.age));
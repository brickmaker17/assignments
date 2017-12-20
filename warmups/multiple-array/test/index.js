const sortedOfAge = require("../index.js");
const chai = require("chai");
const assert = chai.assert;

let data = sortedOfAge([  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ]);

describe('filtering and Sorting by age',  () => {
    it('return an array filtered and sorted by people older than 18', () => {
        assert.deepEqual(sortedOfAge(data), expected);
    });
})
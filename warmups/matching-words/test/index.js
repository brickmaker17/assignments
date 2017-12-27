const findRepeats = require("../index.js");
const chai = require("chai");
const assert = chai.assert;

let str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";
let expected = ["lever", "pull", "far"];

describe('Sorting by repeated words',  () => {
    it('return an array filtered and sorted by repeated words', () => {
        assert.deepEqual(findRepeats(str), expected);
    });
})
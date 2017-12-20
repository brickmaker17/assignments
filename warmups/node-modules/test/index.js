const equalNums = require("../index.js");
const chai = require("chai");
const assert = chai.assert;

const tests = {
    case: [1,1],
    case2: [2, 3],
}

describe('Testiing equalNums function', function (){
    it('should return true', function () {
        assert.equal(equalNums(...tests.case1), true);
    });
    it('should return true', function () {
        assert.equal(equalNums(...tests.case2), false);
    })
})
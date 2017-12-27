const chai = require("chai");
const assert = chai.assert;
const palindrome = require("../index.js");

const tests = ["Star Rats!", "palindrome", "I madam, I made radio! So I dared! Am I mad?? Am I?!"]

describe('checks if a given string is a palindrome', () => {
    it("should return true", () => {
        assert.(palindrome(tests[0]));
        assert.(palindrome(tests[2]));
        
    });
})
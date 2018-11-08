const chai = require("chai");
let assert = chai.assert;

describe('Basic Mocha String Test', () => {
    it('should return number of charachters in a string', () => {
        assert('Hello'.length === 5, 'is 5');
    });
});


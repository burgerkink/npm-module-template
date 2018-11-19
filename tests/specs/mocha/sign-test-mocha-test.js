require('./../../../src/sign-test')(__filename);

const chai = require('chai');
const signTest = require('./../../../index').signTest;

let udf;
const assert = chai.assert;

function MockConsole() {
  let _string = '';
  this.captured = () => _string;
  this.log = input => _string = input;
}

const mockConsole = new MockConsole();
signTest(`${__dirname}/nvl-mocha-test.js`, mockConsole);

describe('sign-test', () => {
  it('string contains a valid MD5', () => {
    assert(mockConsole.captured().indexOf('b9e0a39042d531504bce7586699708dd') !== -1, 'test file signed');
  });
});

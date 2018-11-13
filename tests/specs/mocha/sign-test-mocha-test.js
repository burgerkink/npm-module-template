require('./../../../src/sign-test')(__filename);

const chai = require('chai');
const signTest = require('./../../../src/sign-test');
const nvl = require('./../../../src/nvl').nvl;

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
    assert(mockConsole.captured().indexOf('526875ef48f7e9802bd113bf75b3e8db') !== -1, 'test file signed');
  });
});

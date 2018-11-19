require('./../../../src/sign-test')(__filename);

const signTest = require('./../../../index').signTest;

function MockConsole() {
  let _string = '';
  this.captured = () => _string;
  this.log = input => _string = input;
}

const mockConsole = new MockConsole();

signTest(`${__dirname}/nvl-spec.js`, mockConsole);

describe('console can be injected', () => {
  it('string contains a valid MD5', () => {
    expect(mockConsole.captured().indexOf('d2f72ec91a1dd6b823facd7e6e1e80d1') !== -1).toBe(true);
  });
});

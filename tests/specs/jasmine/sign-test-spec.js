require('./../../../src/sign-test')(__filename);

const signTest = require('./../../../src/sign-test');

function MockConsole() {
  let _string = '';
  this.captured = () => _string;
  this.log = input => _string = input;
}

const mockConsole = new MockConsole();

signTest(`${__dirname}/nvl-spec.js`, mockConsole);

describe('console can be injected', () => {
  it('string contains a valid MD5', () => {
    expect(mockConsole.captured().indexOf('75906eac1ab6966aa2f70bb9aeec05f0') !== -1).toBe(true);
  });
});

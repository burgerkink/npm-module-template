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
    expect(mockConsole.captured().indexOf('62abf549b6135a7abfc542e6aa2a5089') !== -1).toBe(true);
  });
});

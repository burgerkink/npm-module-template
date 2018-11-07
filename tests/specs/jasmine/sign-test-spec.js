require('./../../../src/sign-test')(__filename);

function MockConsole () {
    let _string = '';
    this.captured = () => _string;
    this.log = input => _string = input
}

let mockConsole = new MockConsole();

require('./../../../src/sign-test')(`${__dirname}/nvl-spec.js`, mockConsole);

describe('console can be injected', () => {
    it('string contains a valid MD5', () => {
        expect(mockConsole.captured().indexOf('bec25799eeb024ca7f05802db43b98b2') !== -1).toBe(true);
    });
});

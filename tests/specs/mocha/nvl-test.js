const chai = require('chai');
const nvl = require('./../../../src/nvl').nvl;
let assert = chai.assert;

describe('nvl', () => {

    it('values passed', () => {
        assert('Hello'.length === 5, 'is 5');
        assert(typeof nvl({ obj: true}) === 'object', 'is [object]');
        assert(JSON.stringify(nvl({obj: true})) === '{"obj":true}', 'is [string] JSON');
        assert(typeof nvl(1234) === 'number', 'is [number]');
        assert(nvl(1234) === 1234, 'value of: 1234');
    });

    
});


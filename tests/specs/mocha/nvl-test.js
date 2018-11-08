require('./../../../src/sign-test')(__filename);

const chai = require('chai');
const nvl = require('./../../../src/nvl').nvl;
let udf;
let assert = chai.assert;

describe('nvl()', () => {

    it('with values passed', () => {
        assert('Hello'.length === 5, 'is 5');
        assert.typeOf(nvl({ obj: true}), 'object', 'is [object]');
        assert(JSON.stringify(nvl({obj: true})) === '{"obj":true}', 'is [string] JSON');
        assert.typeOf(nvl(1234), 'number', 'is [number]');
        assert(nvl(1234) === 1234, 'value of: 1234');
    });

    it('with no values', () => {
        assert.notTypeOf(nvl(udf), 'not undefined');
        assert(nvl(udf) === null, 'is [null]');
    });

    it('with no values but with fallback', () => {
        assert.notTypeOf(nvl(udf, 'fallback'), 'not undefined');
        assert(nvl(udf, 'fallback') === 'fallback', 'is [string]');
    });

});


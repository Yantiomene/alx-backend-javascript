const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
    it('rounds a and gives the correct sum', () => {
        assert.equal(calculateNumber(1.78, 2), 4);
        assert.equal(calculateNumber(1.2, 1), 2);
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    it('rounds b and gives the correct sum', () => {
        assert.equal(calculateNumber(2, 1.78), 4);
        assert.equal(calculateNumber(1, 1.2), 2);
        assert.equal(calculateNumber(2, 3.5), 6);
    });

    it('rounds a and b and gives the correct sum', () => {
        assert.equal(calculateNumber(1.78, 2.3), 4);
        assert.equal(calculateNumber(1.2, 0.7), 2);
        assert.equal(calculateNumber(3.5, 2.69), 7);
    });
})

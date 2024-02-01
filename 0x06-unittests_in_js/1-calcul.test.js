const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('SUM', () => {
    it('rounds a and gives the correct sum', () => {
        assert.equal(calculateNumber('SUM', 1.78, 2), 4);
        assert.equal(calculateNumber('SUM', 1.2, 1), 2);
        assert.equal(calculateNumber('SUM', 3.5, 2), 6);
    });

    it('rounds b and gives the correct sum', () => {
        assert.equal(calculateNumber('SUM', 2, 1.78), 4);
        assert.equal(calculateNumber('SUM', 1, 1.2), 2);
        assert.equal(calculateNumber('SUM', 2.0, 3.5), 6);
    });

    it('rounds a and b and gives the correct sum', () => {
        assert.equal(calculateNumber('SUM', 1.78, 2.3), 4);
        assert.equal(calculateNumber('SUM', 1.2, 0.7), 2);
        assert.equal(calculateNumber('SUM', 3.5, 2.69), 7);
    });
})

describe('SUBTRACT', () => {
    it('rounds a and gives the correct substraction', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.78, 2), 0);
        assert.equal(calculateNumber('SUBTRACT', 1.2, 2), -1);
        assert.equal(calculateNumber('SUBTRACT', 3.5, 2), 2);
    });

    it('rounds b and gives the correct substraction', () => {
        assert.equal(calculateNumber('SUBTRACT', -2, 1.78), -4);
        assert.equal(calculateNumber('SUBTRACT', 2.0, 1.2), 1);
        assert.equal(calculateNumber('SUBTRACT', 2, 3.5), -2);
    });

    it('rounds a and b and gives the correct substraction', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.78, -2.3), 4);
        assert.equal(calculateNumber('SUBTRACT', 1.2, 1.7), -1);
        assert.equal(calculateNumber('SUBTRACT', 3.5, 2.69), 1);
    });
})

describe('DIVIDE', () => {
    it('rounds a and gives the correct division', () => {
        assert.equal(calculateNumber('DIVIDE', 1.78, 2), 1);
        assert.equal(calculateNumber('DIVIDE', 1.2, -2), -0.5);
        assert.equal(calculateNumber('DIVIDE', 3.5, 2.0), 2);
    });

    it('rounds b and gives the correct division', () => {
        assert.equal(calculateNumber('DIVIDE', 2, 1.78), 1);
        assert.equal(calculateNumber('DIVIDE', -1, 1.2), -1);
        assert.equal(calculateNumber('DIVIDE', 2, -0.3), 'Error');
    });

    it('rounds a and b and gives the correct division', () => {
        assert.equal(calculateNumber('DIVIDE', -1.78, -2.0), 1);
        assert.equal(calculateNumber('DIVIDE', 1.2, 0.4), 'Error');
        assert.equal(calculateNumber('DIVIDE', 2.69, 3.5), 0.75);
    });
})

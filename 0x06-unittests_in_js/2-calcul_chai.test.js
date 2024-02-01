const {expect} = require('chai');
const calculateNumber = require("./2-calcul_chai.js");

describe('SUM', () => {
    it('rounds a and gives the correct sum', () => {
        expect(calculateNumber('SUM', 1.78, 2)).to.equal(4);
        expect(calculateNumber('SUM', 1.2, 1)).to.equal(2);
        expect(calculateNumber('SUM', 3.5, 2)).to.equal(6);
    });

    it('rounds b and gives the correct sum', () => {
        expect(calculateNumber('SUM', 2, 1.78)).to.equal(4);
        expect(calculateNumber('SUM', 1, 1.2)).to.equal(2);
        expect(calculateNumber('SUM', 2.0, 3.5)).to.equal(6);
    });

    it('rounds a and b and gives the correct sum', () => {
        expect(calculateNumber('SUM', 1.78, 2.3)).to.equal(4);
        expect(calculateNumber('SUM', 1.2, 0.7)).to.equal(2);
        expect(calculateNumber('SUM', 3.5, 2.69)).to.equal(7);
    });
})

describe('SUBTRACT', () => {
    it('rounds a and gives the correct substraction', () => {
        expect(calculateNumber('SUBTRACT', 1.78, 2)).to.equal(0);
        expect(calculateNumber('SUBTRACT', 1.2, 2)).to.equal(-1);
        expect(calculateNumber('SUBTRACT', 3.5, 2)).to.equal(2);
    });

    it('rounds b and gives the correct substraction', () => {
        expect(calculateNumber('SUBTRACT', -2, 1.78)).to.equal(-4);
        expect(calculateNumber('SUBTRACT', 2.0, 1.2)).to.equal(1);
        expect(calculateNumber('SUBTRACT', 2, 3.5)).to.equal(-2);
    });

    it('rounds a and b and gives the correct substraction', () => {
        expect(calculateNumber('SUBTRACT', 1.78, -2.3)).to.equal(4);
        expect(calculateNumber('SUBTRACT', 1.2, 1.7)).to.equal(-1);
        expect(calculateNumber('SUBTRACT', 3.5, 2.69)).to.equal(1);
    });
})

describe('DIVIDE', () => {
    it('rounds a and gives the correct division', () => {
        expect(calculateNumber('DIVIDE', 1.78, 2)).to.equal(1);
        expect(calculateNumber('DIVIDE', 1.2, -2)).to.equal(-0.5);
        expect(calculateNumber('DIVIDE', 3.5, 2.0)).to.equal(2);
    });

    it('rounds b and gives the correct division', () => {
        expect(calculateNumber('DIVIDE', 2, 1.78)).to.equal(1);
        expect(calculateNumber('DIVIDE', -1, 1.2)).to.equal(-1);
        expect(calculateNumber('DIVIDE', 2, -0.3)).to.equal('Error');
    });

    it('rounds a and b and gives the correct division', () => {
        expect(calculateNumber('DIVIDE', -1.78, -2.0)).to.equal(1);
        expect(calculateNumber('DIVIDE', 1.2, 0.4)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 2.69, 3.5)).to.equal(0.75);
    });
})

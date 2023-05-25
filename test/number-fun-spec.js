// Your code here
const {expect} = require('chai');
const {
    returnsThree,
    reciprocal
    } = require('../problems/number-fun');

    describe('returnsThree', () => {
        it('Should return the number 3', () => {
            expect(returnsThree()).to.equal(3);
        })

    })

    describe('reciprocal(num)', () => {
        it('Should return the reciprocal of a number', () => {
            expect(reciprocal(2)).to.equal(.5);
            expect(reciprocal(10)).to.equal(.1);
            expect(reciprocal(5)).to.equal(.2);
        })

        it('Should throw a RangeError if n is out of range', () => {
            expect(() => reciprocal(-2)).to.throw(RangeError);
            expect(() => reciprocal(1000001)).to.throw(RangeError);
        })
    })
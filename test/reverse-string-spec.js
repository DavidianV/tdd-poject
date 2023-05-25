// Your code here
const {expect} = require('chai');
const reverseString = require('../problems/reverse-string')

describe ('reverseString', function() {
    it('Should return reversed word', function() {
        expect(reverseString('fun')).to.equal('nuf');
    })

    it('Should throw TypeError if not a string', function() {
        expect(() => reverseString(42)).to.throw(TypeError);
    })
})
const chai = require('chai');
const expect = chai.expect;
const calc = require('../src/main');

// describe('canary test', function() {
//   it('expects true to be true', function() {
//     expect(true).to.eql(true);
//   });
//   it('expects same array to be same array', function() {
//     expect([1, 2]).to.eql([1, 2]);
//   });
//   it('expects same array variable to be same array variable', function() {
//     let arr1 = [1, 2];
//     let arr2 = [1, 2];
//     expect(arr1).to.eql(arr2);
//   });
// });

describe('long division', function() {
  it('is defined as a function', function() {
    expect(calc.longDivision).to.be.a('function');
  });
  it('rejects divisor of zero with an insulting error message', function() {
    expect(calc.longDivision(10, 0)).to.equal('Cannot divide by zero!');
  });
  describe('10 / 3', function() {
    let result;

    beforeEach(function() {
      result = calc.longDivision(10, 3);
    });

    it('returns an object', function() {
      expect(result).to.be.an('object');
    });
    it('has keys for quotient and remainder', function() {
      expect(result).to.have.keys('quotient', 'remainder');
    })
    it('gives the right values for quotient and remainder', function() {
      expect(result).to.deep.equal({
        quotient: 3,
        remainder: 1
      })
    })
  });
});

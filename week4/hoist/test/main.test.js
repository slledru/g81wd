const { expect } = require('chai')  // object destructuring
const {
  scopeExperiment,
  shadowingExperiment,
  closureExperiment,
  upAndDown
} = require('../src/main.js')

// describe('IMPROVED canary test', function () {
//   it('expects to see yayTheTestsWork', function () {
//     expect(yayTheTestsWork()).to.eql(true);
//   });
// });

describe('scope experiment', function() {
  it('is defined as a function', function() {
    expect(scopeExperiment).to.be.a('function');
  });
  it('x is greater than 5', function() {
    expect(scopeExperiment(6)).to.equal('x is greater than 5');
  });
  it('x is less than or equal to 5', function() {
    expect(scopeExperiment(-1)).to.equal('x is less than or equal to 5');
  });
});

describe('shadowing experiment', function() {
  it('is defined as a function', function() {
    expect(shadowingExperiment).to.be.an('function');
  });
  it('x is greater than 5', function() {
    expect(shadowingExperiment(6)).to.equal('x is greater than 5');
  });
  it('x is less than or equal to 5', function() {
    expect(shadowingExperiment(-1)).to.equal('x is less than or equal to 5');
  });
});

describe('closures', function () {
  it('is defined as a function', function() {
    expect(closureExperiment).to.be.a('function');
  });
  it('doubles the original argument', function() {
    expect(closureExperiment(6)()).to.equal(12);
  });
});

describe('upAndDown IIFE', function () {
  it('is defined as an object', function() {
    expect(upAndDown).to.be.an('object');
  });
  it('has the right functions as values', function() {
    expect(upAndDown).to.have.keys('increment', 'decrement', 'read');
  });
  it('increments and decrements properly', function() {
    upAndDown.decrement();
    upAndDown.decrement();
    upAndDown.increment();
    expect(upAndDown.read()).to.equal(`We're at -1`);
  });
});

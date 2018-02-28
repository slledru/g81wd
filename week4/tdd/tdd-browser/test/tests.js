const expect = chai.expect;

// describe('canary test', function() {
//   it('true to be equal to true', function() {
//     expect(true).to.equal(true);
//   })
// })

describe('calc', function() {
  it('is defined', function() {
    expect(calc).to.be.an('object')
  })
  it('has a function called l2Norm', function() {
    expect(calc.l2Norm).to.be.a('function')
  })
  it('L2 norm for (8, 4, 1) is 9', function() {
    const result = calc.l2Norm([8, 4, 1])
    expect(result).to.eql(9)
  })
})

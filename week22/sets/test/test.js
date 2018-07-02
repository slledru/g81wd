const { expect } = require('chai')
const SetUtils = require('../SetUtils')

describe('TDD for the sets', () => {
  let set1 = null
  let set2 = null
  let newSet = null

  beforeEach(() => {
    set1 = new Set().add(1).add(2)
    set2 = new Set().add(2).add(3)
    newSet = new SetUtils()
  })

  it('Union', () => {
    let result = newSet.union(set1, set2)
    expect([...result]).to.deep.equal([1, 2, 3])
  })

  it('Intersection', () => {
    let result = newSet.intersection(set1, set2)
    expect([...result]).to.deep.equal([2])
  })

  it('Difference', () => {
    let result = newSet.difference(set1, set2)
    expect([...result]).to.deep.equal([1, 3])
  })
})

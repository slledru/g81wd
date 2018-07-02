class SetUtils {
  union(set1, set2) {
    return new Set([...set1, ...set2])
  }

  intersection(set1, set2) {
    return new Set([...set1].filter((x) => set2.has(x)))
  }

  difference(set1, set2) {
    const common = this.intersection(set1, set2)
    const array1 = new Set([...set1].filter((x) => !common.has(x)))
    const array2 = new Set([...set2].filter((x) => !common.has(x)))
    return new Set([...array1, ...array2])
  }
}

module.exports = SetUtils

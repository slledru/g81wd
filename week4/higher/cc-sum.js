// 4545-4545-4545-4545  sum

const ccSum = (nums) => (
  nums
    .map((x) => ({
      ccString: x,
      digitSum: x
        .replace(/\D/g, '')
        .split('')
        .map((y) => +y)
        .reduce((u, v) => u + v, 0)
    }))
    .sort((a, b) => Math.sign(a.digitSum - b.digitSum))
    .pop()
    .ccString
)

const result = ccSum([
  '4916-2600-1804-0530',
  '4779-2520-8880-3972',
  '4252-2780-8930-7978',
  '4556-4242-9283-2260'
])
console.log(result)

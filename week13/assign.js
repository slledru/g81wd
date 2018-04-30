const user = { username: 'angelica' }
const admin = { admin: true }

Object.assign(user, admin)

console.log('user1', user)

const adminUser = Object.assign({}, user, { admin: true })

console.log('user2', user)
// => { username: 'angelica' }

console.log('adminUser', adminUser)
// => { username: 'angelica', admin: true }

const adminUser2 = {
  ...user,
  admin: true
}

console.log('adminUser2', adminUser2)

const clock = {
  hours: 13,
  minutes: 40,
}

const clone = {
  ...clock,
  seconds: 46,
}

console.log('clock', clock)
console.log('clone', clone)

const clock2 = {
  hours: 13,
  minutes: 40,
  seconds: 23,
}

const clone2 = {
  ...clock2,
  minutes: 12,
}

console.log('clock2', clock2)
console.log('clone2', clone2)

const clock3 = {
  hours: 13,
  minutes: 40,
  seconds3: 23,
}

const { seconds3, ...clone3 } = clock3

console.log('seconds3', seconds3)
console.log('clone3', clone3)

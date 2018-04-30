const a = Object.freeze({
  foo: Object.freeze({ greeting: 'Hello' }),
  bar: 'world',
  baz: '!'
})

a.foo.greeting = 'Goodbye'

console.log(`${ a.foo.greeting }, ${ a.bar }${a.baz}`)

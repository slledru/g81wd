let a = [function hello() {
  console.log('hello');
}];
console.log(a[0]);
const o = {hello: () => console.log('hello')}
const o2 = {howdy: o.hello}
o2.howdy();

let num = {one:1, two:2, three:3}
for (var key in num) {
  console.log(key, num[key], num.key);
}

let $_ = 'really???'
console.log($_);

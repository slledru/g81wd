# Template Literals Comparison

### Multiline String
```javascript
// BTL
console.log("This is how you concatenate a long string that" +
" wraps around the screen");
// ATL
console.log(`This is how you concatenate a long string that
  wraps around the screen`);
```

### Expression Interpolation
```javascript
let a = 0;
let b = 0;
// BTL
console.log('Adding ' + a + ' to ' + b + ' is ' + (a + b) + '.');
// ATL
console.log(`Adding ${a} to ${b} is ${a + b}.`);
```
```javascript
const add = (a, b) => (a + b);
let a = 0;
let b = 0;
// BTL
console.log('Adding ' + a + ' to ' + b + ' is ' + add(a, b) + '.');
// ATL
console.log(`Adding ${a} to ${b} is ${ add(a, b) }.`);
```

### Configurable String
```javascript
// BTL
var classes = 'header';
classes += ( isLargeScreen() ?
              '' : ( isCollapsed() ?
                      ' icon-expander' : ' icon-collapser' ) );
// ATL
const classes = `header ${ isLargeScreen() ?
                              '' : ( isCollapsed() ?
                                      'icon-expander' : 'icon-collapser' ) }`;

const classes = `header ${ isLargeScreen() ?
                              '' : `icon-${ ( isCollapsed() ?
                                                'expander' : 'collapser' ) }` }`;
```
### Tagged Template Literals
```javascript
const template = (strings, ...keys) => {
  let result = '';
  // swap the first and the second from keys
  let tmp = keys[0];
  keys[0] = keys[1];
  keys[1] = tmp;
  // shuffle strings and keys
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < keys.length) {
      result += keys[i];
    }
  }
  return result;
}

let a = 5;
let b = 8;
console.log(template`Adding ${a} to ${b} is ${a + b}.`);
// Adding 8 to 5 is 13.
```

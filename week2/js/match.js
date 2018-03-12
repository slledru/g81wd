const pattern = '^[a-zA-Z]([a-zA-Z0-9]|-{1})*[^-]$';

const name1 = '-asd';
const name2 = 'asd-adwed-fwaef-';
const name3 = 'wfew-asd';
const name4 = 'awef--asd';
const name5 = 'afewfeasd';
console.log(name1.match(/pattern/));
console.log(name2.match(/pattern/));
console.log(name3.match(/pattern/));
console.log(name4.match(/pattern/));
console.log(name5.match(/pattern/));

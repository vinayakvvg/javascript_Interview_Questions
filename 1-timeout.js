// what will be the output?

console.log('a');

setTimeout(() => {
  console.log('b');
}, 1)

setTimeout(() => {
  console.log('c');
}, 10)

setTimeout(() => {
  console.log('d');
}, 0)

console.log('e');


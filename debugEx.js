/**
 * in terminal
 * node --inspect-brk debugEx.js
 * -or-
 * node inspect debugEx.js for terminal debugger
 *
 */

const a = [1, 2, 3];

// random function to inspect
// should return arr of doubled numbers
const b = a.map((e) => {
  return e + e;
});

console.log(b);

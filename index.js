// process.stdout.write(Math.random().toString());

// console.log(process);

// console.dir(process, { depth: 0 });

// function X() {
//   console.log(arguments);
// }

// X(1, 7, 9);

// works like above because of WRAPPING, IIFE (immed invoked func expr)
// // (function(exports, require, module, __filename, __dirname) {
// console.log(arguments);
// // return ...
// // })()

// console.log(exports);

// exports.answer = 42;
// module.exports.answer2 = 37;
// // console.log(exports);

// // for demonstrating require() in index 2
// // this will only show once
// console.log("hello");

// // this will show three times
// module.exports = () => {
//   console.log("Hello");
// };

// // you can export anything you want using objects {}
// module.exports = {
//   f1: () => console.log("hello"),
// };

// using export instead
export default {
  f1: () => {
    console.log("hello");
  },
};

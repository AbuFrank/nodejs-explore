// // will execute the code in index.js
// require("./index.js");

// // require give you all the module exports as well
// const index = require("./index.js");
// console.log(index);

// // node does some caching only shows once no work around
// // adding the () at the end of each require runs the exported fxn
// require("./index.js")();
// require("./index.js")();
// require("./index.js")();

// // execute an objects fxn
// require("./index.js").myFunc();
// require("./index.js").myFunc2();

// // import instead
// import f1 from "./index";
// f1();

// import http from "http";
// console.log(http);

// import _ from "lodash";
// console.log(_.sum([1, 2, 3])); // returns 6

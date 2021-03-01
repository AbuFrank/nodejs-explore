import fs from "fs";

// // reading files
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// // writing files
// fs.writeFile("./test2.txt", "replacement text hello world", (req, res) => {
//   console.log("file was written");
// });

// // directories
// // creates and deletes an assets folder
// // only runs if the folder doesn't exist
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log("folder created");
//   });
// } else {
//   // delete the folder if it does exist
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// // deleting files
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }

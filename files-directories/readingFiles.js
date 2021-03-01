import fs from "fs";

// reading files
fs.readFile("./test.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last line");

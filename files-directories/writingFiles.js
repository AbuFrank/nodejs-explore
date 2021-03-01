import fs from "fs";

// writing files
fs.writeFile("./test2.txt", "replacement text hello world", (req, res) => {
  console.log("file was written");
});

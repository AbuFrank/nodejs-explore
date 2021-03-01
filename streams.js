/*
 *  Creates a stream that chunks large file sizes
 *  and writes to a new file
 */

import fs from "fs";

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("-----NEW CHUNK-----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNKN");
//   writeStream.write(chunk);
// });

// or use a pipe instead
readStream.pipe(writeStream);

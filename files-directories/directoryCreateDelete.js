import fs from "fs";

// directories
// creates and deletes an assets folder
// only runs if the folder doesn't exist
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", err => {
    if (err) {
      console.log(err);
    }

    console.log("folder created");
  });
} else {
  // delete the folder if it does exist
  fs.rmdir("./assets", err => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

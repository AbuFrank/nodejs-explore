// child_process
import { exec } from "child_process";
import util from "util";

// // old way
// // err is if the exec fails stderr is if the exec command errors
// exec("ls /", (err, stdout, stderr) => {
//   if (err) {
//     // throw err;
//     process.exit(1);
//   }
//   console.log(stdout);
// });

// we prefer async so we make it a promise instead
const execProm = util.promisify(exec);
// then wrap it in a an async func and await it
const main = async () => {
  try {
    const std = await execProm("ls /");
    // const { stdout } = std;

    console.log(std);
    console.log({ stdout });
  } catch (err) {
    console.log(err);
    // process.exit(1);
  }
};

main();

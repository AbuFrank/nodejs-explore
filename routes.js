import http from "http";
import fs from "fs";
import _ from "lodash";

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  console.log(num);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  // page, 404, and redirects
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send the appropriate html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("THE PATH IS : ", path);
    // res.write(data)
    res.end(data);
  });
});

server.listen(5000, "localhost", () => {
  console.log("listening for requests on port 5000");
});

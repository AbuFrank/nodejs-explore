import http from "http";

// respond with html from server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set header content type
  res.setHeader("Content-Type", "text/html");
  // write your response
  res.write("<head><link rel='stylesheet' href='#'></head>");
  res.write("<p>hello, ninjas</p>");
  res.write("<p>hello, ninjas, again</p>");
  // end response
  res.end();
});

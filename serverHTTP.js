import http from "http";

const server = http.createServer();

// server object emits an event

server.on("request", (req, res) => {
  console.log("request!!!", req.url);
  if (req.url == "/favicon.icon") {
    res.write("");
  } else {
    res.write("Hello HTTP");
  }
  res.end();
});

server.listen(3000);

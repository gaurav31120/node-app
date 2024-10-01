const http = require("http");

const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = { age: 5 };

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("server started");
  res.setHeader("Dummy", "DummyValue");
  res.setHeader("Content-Type", "application/json");
  //   res.end(JSON.stringify(data))
  res.end(index);
});

server.listen(8080);

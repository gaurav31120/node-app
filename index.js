const http = require("http");

const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");
// const data = { age: 5 };

const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    case "/product":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    default:
      res.writeHead(404, "NOT FOUND");
      res.end();
  }
  console.log("server started");
//   res.setHeader("Dummy", "DummyValue");

  //   res.end(data);
});

server.listen(8080);

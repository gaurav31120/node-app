// const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();

//writing middlewares
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get("User-agent")
  );
  next();
});

const auth = (req, res, next) => {
  console.log(req.query);
  if (req.query.password=='123') {
    next();
  } else {
    res.sendStatus(401);
  }
};
// server.use(auth); // middleware path par lagana chahiye

// API - Endpoint - Route
server.get("/",auth, (req, res) => {
  res.json({ type: "GET" });
});
server.post("/", auth,(req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/", (req, res) => {
  //   res.sendStatus(404)
  //   res.json(products);
  res.status(201).send("<h1>hello</h1>");
  // res.sendFile('D:\NodeJS\node-app\index.html')
});

server.listen(8080, () => {
  console.log("server started");
});

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url.startsWith("/product")) {
//     console.log(req.url.split("/"));
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id === +id); // +id means + se koi bhi string number me convert ho jata hai jo number jaisa ho
//     console.log(product);
//     res.setHeader("Content-Type", "text/html");
//     let modifiedIndex = index
//       .replace("**title**", product.title)
//       .replace("**url**", product.thumbnail)
//       .replace("**price**", product.price)
//       .replace("**rating**", product.rating);
//     // .replace("**title**", product.title);
//     res.end(modifiedIndex);
//     return;
//   }
//   //   case "/product":
//   //       res.setHeader("Content-Type", "text/html");
//   //       let modifiedIndex = index
//   //         .replace("**title**", product.title)
//   //         .replace("**url**", product.thumbnail)
//   //         .replace("**price**", product.price)
//   //         .replace("**rating**", product.rating);
//   //       // .replace("**title**", product.title);
//   //       res.end(modifiedIndex);
//   //       break;

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;

//     default:
//       res.writeHead(404, "NOT FOUND");
//       res.end();
//   }
//   console.log("server started");
//   //   res.setHeader("Dummy", "DummyValue");

//   //   res.end(data);
// });

// server.listen(8080);

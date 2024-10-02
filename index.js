const http = require("http");

const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const data = { age: 5 };
// const product = data.products[0];
const products = data.products;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url.startsWith("/product")) {
    console.log(req.url.split("/"));
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id); // +id means + se koi bhi string number me convert ho jata hai jo number jaisa ho
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    // .replace("**title**", product.title);
    res.end(modifiedIndex);
    return;
  }
  //   case "/product":
  //       res.setHeader("Content-Type", "text/html");
  //       let modifiedIndex = index
  //         .replace("**title**", product.title)
  //         .replace("**url**", product.thumbnail)
  //         .replace("**price**", product.price)
  //         .replace("**rating**", product.rating);
  //       // .replace("**title**", product.title);
  //       res.end(modifiedIndex);
  //       break;

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
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

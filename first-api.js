const fs = require("fs");
const http = require("http");
const url = require("url");

// Server
const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/" || url === "/home") {
    res.end("This is the HOME page");
  } else if (url === "/about") {
    res.end("This is the ABOUT page");
  } else if (url === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "My-Header": "test-header",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000...");
});

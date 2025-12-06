const fs = require("fs");
const http = require("http");
const url = require("url");

// File Read/ Write
// Sync way..
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is new content. And this is existing content - ${textIn} \nCreated on ${Date.UTC()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File updated!");

// Async way..
// const fileContent = fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   if (err) return console.log("Error reading file:", err);
//   const textOut = `This is new content. And this is existing content - ${data} \nCreated on ${Date.now()}`;
//   fs.writeFile("./txt/output.txt", textOut, (err) => {
//     if (err) return console.log("Error writing file:", err);
//   });
// });

// console.log("File updated!");

//////////////////////////////////////////////////
// Server
const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/" || url === "/home") {
    res.end("This is the HOME page");
  } else if (url === "/about") {
    N;
    res.end("This is the ABOUT page");
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

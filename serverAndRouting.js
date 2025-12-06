const http = require("http");

// Server
const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/" || url === "/home") {
    res.end("This is the HOME page");
  } else if (url === "/about") {
    res.end("This is the ABOUT page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "My-Header": "test-header", // Setting customer response header
    });
    res.end("<h1>Page not found</h1>"); // fallback content
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000...");
});

// run `node serverAndRouting.js` and hit `http://127.0.0.1:8000/ & http://127.0.0.1:8000/about` in the browser

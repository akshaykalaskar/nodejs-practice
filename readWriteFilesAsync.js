// File Read/ Write
const fs = require("fs");
// Async way..
// Reading file
fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  if (err) return console.log("Error reading file:", err);

  // Writing now
  const textOut = `This is new content. And this is existing content - ${data} \nCreated on ${Date.now()} today`;
  fs.writeFile("./txt/output.txt", textOut, (err) => {
    if (err) return console.log("Error writing file:", err);
  });
});

console.log("File updated!");

// run `node readWriteFilesAsync.js` in terminal to see output

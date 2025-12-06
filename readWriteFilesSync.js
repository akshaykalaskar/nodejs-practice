const fs = require("fs");

// File Read/ Write
// Sync way..
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is new content. And this is existing content - ${textIn} \nCreated on ${Date.UTC()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File updated!");

// run `node readWriteFilesSync.js` in terminal to see output

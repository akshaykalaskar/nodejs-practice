const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`./starter/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);
  console.log(`__dirname: ${__dirname}`);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile("./starter/fetched-image.txt", res.body.message, (err) => {
        if (err) return console.error(err);
        console.log("File written successfully");
      });
    })
    .then((err) => {
      console.log(err.message);
    });
});

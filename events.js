const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("Event Subscribed");
});

myEmitter.on("newSale", () => {
  console.log("Event Subscribed 1");
});
myEmitter.emit("newSale");

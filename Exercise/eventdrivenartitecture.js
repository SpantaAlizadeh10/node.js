let events = require("events");
// creating an event emitter

let eventEmitter = new events.eventEmitter();

// this is the event listener
eventEmitter.on("connection", () => {
  console.log("connection successfull.");
})

//firing the connection event

eventEmitter.emit("connection");

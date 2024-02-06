const http = require("http");
const casual =require('casual')

const server = http.createServer((req, res) => {
  res.end(casual.country);

});

server.listen(4000, () => {
  console.log("server start at port 4000.");
});

const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("timer 1 finished"),0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("test-file.txt",() => {
    console.log("I/O finished");
    console.log("--------------------------");

 setTimeout(() => console.log("timer 2 finished"),0);
 setTimeout(() => console.log("timer 3 finished"),300);
 setImmediate(() => console.log("immediate 2 finished"));


process.nextTick(() => console.log("process.nextTIck"))

crypto.pbkdf2("password", "salat",10000,1204,"sha512",()=>{
    console.log(Date.now() -start,"password encrypted");
});

})
console.log("hello");
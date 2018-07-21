const fs = require('fs');

let a = 5;

console.log("hello world!");

const FILE = "test/test1.txt";

fs.readFile(FILE, (err: any, data: any) => {
    if(err) {
        console.log("err", err);
    }
    else {
        console.log("data", data.toString());
    }
})
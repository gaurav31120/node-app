const lib = require("./lib.js");

// import {sum,diff} from './lib.js'
const fs = require("fs");

const txt = fs.readFileSync('demo.txt','utf-8')
console.log(txt)

console.log(lib.sum(4, 5), lib.diff(3, 6));

const a = 5;

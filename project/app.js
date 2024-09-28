//const obj = require("./sum");

//destructing

const {calculateMultiply,calculateSum}=require("./calculate");
const util = require('node:util');

const data=require("./data.json");


//import { calculateSum ,x} from "./sum.js";

//import {} from "./xyz.js"

let name="My First node js project";

let a=10;
let b=20;

//z="Demo stict node of ES";
z="Demo non strict mode of Comm JS";

console.log(name);

console.log(z);

console.log(data);
//obj.calculateSum(a,b);
//console.log(obj.x);

console.log(x);
calculateSum(a,b);
calculateMultiply(a,b);


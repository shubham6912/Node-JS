const fs=require("fs");
const https = require("https");
const pdk2= require("crypto");


pdk2.pbkdf2Sync("password","salt",500000,50,"sha512");

console.log("First key is generated");


pdk2.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
console.log(key)
});

console.log("Hello world");


var a=102;

var b=2222;

//fs.readFileSync("./file.txt", "utf8");


fs.readFile("./file.txt",(err,data)=>{
   console.log( "file read succ" );
});

console.log("This will execute only after file read");

setTimeout(()=>{
    console.log("setTimeOut called for 5 sec")
},5000);

https.get("https://www.google.com",(res)=>{
    console.log("Response returned");
});


function multiply(x,y){
    return x*y;
}

console.log("Multiplication result = ",multiply(a,b));
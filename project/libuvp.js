const fs=require("fs");
const https = require("https");

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
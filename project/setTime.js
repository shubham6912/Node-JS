console.log("Hello world");

var a = 10000;
var b  = 2000;

setTimeout(()=>{
    console.log("Call me after zero seconds");
},0);

setTimeout(()=>{
    console.log("Call me after 5 seconds ");
},5000);



function multiply(a,b){
    result=a*b;
    return result;
}

console.log("Multiply ,",multiply(a,b));

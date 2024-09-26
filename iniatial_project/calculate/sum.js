 x ="export in react exports in node";

 //export let x ="export in react exports in node";


function calculateSum(a,b){
  let sum=a+b;
   console.log(sum);
}
/*

export function calculateSum(a,b){
    let sum=a+b;
    console.log(sum);
}
*/

/*
module.exports=
{   x,
    calculateSum
}
*/

module.exports.x=x;
module.exports.calculateSum=calculateSum;
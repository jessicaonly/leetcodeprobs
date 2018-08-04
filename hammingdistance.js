const hammingDistance = (x, y) => {
//convert integers to strings
  x = x.toString();
  y = y.toString();

//create empty strings to store the binary
 let binaryX = '';
 let binaryY = '';

 //loop through X and Y - getting the ASCII codes (charCodeAt) and the binary represetnations, and add to the binaryX and binaryY
 for (let i = 0; i < x.length; i++){
  binaryX += x[i].charCodeAt(0).toString(2) + ' ';
  binaryX = binaryX.replace(/\s/g, "");
 }
console.log(binaryX)
 for (let i = 0; i < y.length; i++){
  binaryY += y[i].charCodeAt(0).toString(2) + ' ';
  binaryY = binaryY.replace(/\s/g, "");
 }
 console.log(binaryY)
 let diffNum = 0;

let lilString = '';
let bigString = '';

 if (binaryX.length !== binaryY.length){
  if (binaryX.length < binaryY.length){
    lilString = binaryX;
    bigString = binaryY;
  }
  else if (binaryY.length < binaryX.length){
    lilString = binaryY;
    bigString = binaryX;
  }
}
else {
  lilString = binaryX;
  bigString = binaryY;
}
console.log(lilString)
console.log(bigString)

 for (let i = 3; i < lilString.length; i++){
      if (lilString[i] !== bigString[i]){
        diffNum++
   }
 }
console.log(diffNum)
return diffNum;
}

hammingDistance(0, 10)
const deletionDistance = (str1, str2) => {
let str1Obj = {};
let str2Obj = {};
let deletionCount = 0;
for (let i = 0; i < str1.length; i++){
  str1Obj[str1[i]] = 1;
}
for (let j = 0; j < str2.length; j++){
  str2Obj[str2[j]] = 1;
}

for (let i = 0; i < str1.length; i++){
  if (!(str1[i] in str2Obj)){
    deletionCount++;
  }
}

for (let j = 0; j < str2.length; j++){
    if (!(str2[j] in str1Obj)){
      deletionCount++;
    }
}

return deletionCount;
}

console.log(deletionDistance('', ''))


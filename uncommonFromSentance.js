var uncommonFromSentences = function(A, B) {
  A = A.split(' ');
  B = B.split(' ');
  let uncommonArray = [];
  for (let i = 0; i < A.length; i++){
      if (B.includes(A[i])){
          A.splice(i, 1);
          B.splice(i, 1);
      }
  }
  console.log(A)
  console.log(B)
  uncommonArray.push(A);
  uncommonArray.push(B);
  return uncommonArray;
};


uncommonFromSentences('this apple is sweet', 'this apple is sour');
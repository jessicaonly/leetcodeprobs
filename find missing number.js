// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//sort A
//if index !== A-1; return A
function solution(A) {
    
  function sortArray(a, b){
      return a-b;
  }
  A.sort(sortArray);
   A.join(',');
  A = A.filter(function(item, pos, self){ return self.indexOf(item) == pos});
  console.log(A);
  if (A[A.length-1] < 0){
    return 1;
  }
  for (let i = 1; i < A.length; i++){
    if (A.length < 0){
      return 1;
    }
    
    if (i !== A[i] - 1){
      return A[i] - 1;
    }
    if (A.length > 0){
    return A.length + 1;
    }
  }
}


console.log(solution(  [1, 3, 6, 4, 1, 2] ))
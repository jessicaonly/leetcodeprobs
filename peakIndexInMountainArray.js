//peakIndex takes in an array, A, that's >= 3. find the biggest number in this array, and return its index
//create a place to store each number and its index inside of; if it gets to a bigger number, replace the smaller one with the larger one.

const peakIndexInMountainArray = (A)  => {

  //create storage
  let storage = {'answer': 0};
  let checkNum = 0;
  //account for edge cases
  if (A.length <= 2){
    return 'this is not a mountain!';
  }
  //loop through array; storing biggest number's index in storage object
  else {
    for (let i = 0; i < A.length; i++){
      if (A[i] > checkNum){
        checkNum = A[i];
        storage.answer = i;
      }
    }
  }
  return storage.answer;
};

peakIndexInMountainArray([0, 60, 5, 2])
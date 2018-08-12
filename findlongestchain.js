// You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

// Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.

// Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

//pairs are an array of arrays. loop through pairs, adding items to an object (key = first item, value = second)
//
const findLongestChain = (pairs) => {
  let pairsNum = 0;
  let firstItem = 0;
  let secondItem = 0;
  let pairsArray = [];

    for (let i = 0; i < pairs.length; i++){
        secondItem = pairs[i][1]; 
      for (let j = 0; j < pairs.length; j++){
          firstItem = pairs[j][0]; 
          if (firstItem === secondItem + 1){
            if (!pairsArray.includes(secondItem))
            pairsNum++; 
            pairsArray.push(secondItem); 
 
        }
      }
    }
    return pairsNum + 1;
  }

findLongestChain([[1,2], [3,4], [2, 9], [5,6]])
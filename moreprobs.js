// // var plusOne = function(digits) {
// //     let tempStr = '';
    
// //     for (let i = 0; i < digits.length; i++){
// //         tempStr += digits[i];
// //     }
    
// //     let num = parseInt(tempStr);
// //     num += 1;
// //     num.toString().split('').map(Number);

// //     return num;
// // };

// // console.log(plusOne([1,2,3]))

// // var moveZeroes = function(nums) {
// //   for (let i = nums.length - 1; i >= 0; i--){
// //      if (nums[i] === 0){
// //        nums.splice(i,1);
// //        nums.push(0)
// //      }
// //   }
// //  return nums;
// // };

// // console.log(moveZeroes([0,1,0,3,12]))

// var twoSum = function(nums, target) {
//   let hash = {};
//   let returnArr = [];
  
//   for (let i = 0; i < nums.length; i++){
//       hash[nums[i]] = i;
//   }
//   console.log(hash)

//   for (let j = 0; j < nums.length; j++){
//       for (key in hash){
//           if (nums[j] + parseInt(key) === target){
//               returnArr.push(j);
//               break;
//           }
//       }
//   }
  
//   return returnArr;
  
// };

// console.log(twoSum([2, 7, 11, 15], 9))


// var isAnagram = function(s, t) {
//   let stringSArr = s.split('');
//   let stringTArr = t.split('');
  
//   stringSArr.sort(function(a,b){
//     if (a < b) return -1;
//     if (a > b ) return 1;
//     return 0;
//   })
//     stringTArr.sort(function(a,b){
//     if (a < b) return -1;
//     if (a > b ) return 1;
//      return 0;
//   })
//   let stringS = stringSArr.join('');
//   let stringT = stringTArr.join('');

//  if (stringS === stringT) return true;
  
//  else return false;
// };


// console.log(isAnagram('anagram', 'anagram'))

function haystackContainsNeedle (a,b){
  return a.indexOf(b) >= 0;
}
var strStr = function(haystack, needle) {
  if (haystackContainsNeedle(haystack,needle)){
    return haystack.indexOf(needle[needle.length-1])
  }
  return -1;
};

console.log(strStr('hello', 'll'))
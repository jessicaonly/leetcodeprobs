var rotate = function(nums, k) {


  for (let i = 0; i < nums.length; i++){
    if (i <= k){
      let temp = nums.splice(i, 1)
      nums.push(parseInt(temp));
    }
  }
  
    return nums;
};


console.log(rotate([1,2], 1));
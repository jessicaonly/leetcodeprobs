var search = function(nums, target) {
    if (nums.includes(target)){
      return nums.indexOf(target);
    }
    else return -1;
};

console.log(search([-1,0,3,5,9,12], 9))
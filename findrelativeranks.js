//sort this array in descending order
//first is gold, second is silver, third is bronze
//third and fourth are just their indexes + 1

const findRelativeRanks = function(nums) {

  let ranks = nums.sort((a, b) => b - a);
 
     return nums.map((num, index) => {
         if (num === ranks[0]) return "Gold Medal";
         else if (num === ranks[1]) return "Silver Medal";
         else if (num === ranks[2]) return "Bronze Medal";
         else return (ranks.indexOf(num) + 1).toString();
     });
 };
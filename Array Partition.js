var arrayPairSum = function(nums) {

    let sorted = nums.sort((a,b) => a-b);
    let result = 0;

    for(let i =0; i< sorted.length ; i += 2){
        result+= sorted[i];
    }
    return result;
};

console.log(arrayPairSum([1,4,3,2]));
console.log(arrayPairSum([6,2,6,5,1,2]));
var moveZeroes = function(nums) {
    let read = 0;
    let write = 0;
    
    while(read < nums.length){
        if(nums[read] !== 0){
            nums[write] = nums[read];
            write++;
        }
        read ++;
    }
    while(write !== nums.length ){
        nums[write] = 0;
        write++
    }
};
let nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);



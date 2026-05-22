//brute force solution
var maxSlidingWindow = function(nums, k) {
    let result = [];
    let n = nums.length;

    for(let i =0 ; i <= n - k ; i++ ){
        let max = nums[i];
        for(let j = 1; j < k ; j++){
            if(nums[i + j] > max){
                max = nums[i + j];
            }
        }
            result.push(max);
    }
    return result;
}

//These Solution gives => Time exceeded

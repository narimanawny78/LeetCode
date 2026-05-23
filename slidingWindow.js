//brute force solution
// var maxSlidingWindow = function(nums, k) {
//     let result = [];
//     let n = nums.length;

//     for(let i =0 ; i <= n - k ; i++ ){
//         let max = nums[i];
//         for(let j = 1; j < k ; j++){
//             if(nums[i + j] > max){
//                 max = nums[i + j];
//             }
//         }
//             result.push(max);
//     }
//     return result;
// }

//These Solution gives => Time exceeded


// The Optimized Solution

var maxSlidingWindow = function(nums, k) {
    let result = [];
    let deque = [];

    for(let i = 0 ; i < nums.length ; i++ ){
        if(deque.length > 0 && deque[0] <= i - k){
            deque.shift();
        }
        while(deque.length > 0 && nums[deque[deque.length-1]] < nums[i]){
            deque.pop();
        }
        deque.push(i);
        if(i >= k-1){
            result.push(nums[deque[0]]);
        }
    }
    return result;
}
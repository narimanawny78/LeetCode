var topKFrequent = function(nums, k) {
    let map = new Map();

    for(let i = 0 ; i< nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1)
        }else{
            map.set(nums[i],map.get(nums[i] ) +1)
        }
    }

    let mapSort = new Map([...map.entries()].sort((a,b) => b[1] - a[1]))

    let result = [];
    let count = 0;

    for(let [key, val] of mapSort.entries()){
        if(count < k){
            result.push(key)
            count++
        }
    }

    return result;


};


// // let freq = new Map();

    // for(let i = 0 ; i< nums.length;i++){
    //     if(!freq.has(nums[i])){
    //         freq.set(nums[i], 1)
    //     }else{
    //         freq.set(nums[i], freq.get(nums[i]) + 1)
    //     }
    // }

    
    // const arr = [...freq.entries()];

    // arr.sort((a, b) => b[1] - a[1]);

    // return arr
    //     .slice(0, k)
    //     .map(item => item[0]);

var numJewelsInStones = function(jewels, stones) {
    let stoneNum = [...stones]
    return stoneNum.filter((x)=> jewels.includes(x)).length;
};
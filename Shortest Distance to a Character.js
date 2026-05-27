var shortestToChar = function(s, c) {
    let answer = [];
    let lastSeen = -s.length;

    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === c){
            lastSeen = i;
        }
       let distance = Math.abs(i - lastSeen);
        answer.push(distance);
    }
    for(let j = s.length -1 ; j >= 0 ; j--){
        if(s[j] === c){
            lastSeen = j;
        }
       let newdistance = Math.abs(j - lastSeen);
        answer[j] = Math.min(answer[j] , newdistance);

    }
    return answer;
};

console.log(shortestToChar("loveleetcode", "e"));

//[3 , 2 , 1, 0 , 1, 0, 0 ,1 ,2 ,2, 1 ,0]
//[k , k , k, 0 , 1, 0, 0, 1, 2, k, k, 0]
//[12, 13, 14, 0, 1, 0, 0, 1, 2, 3, 4, 0]


// Code Optimization:
var shortestToChar = function(s, c) {
    let answer = [];
    let lastSeen = -s.length;

    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === c){
            lastSeen = i;
        }
       let distance = i - lastSeen;
        answer.push(distance);
    }
    lastSeen = 2 * s.length
    for(let j = s.length -1 ; j >= 0 ; j--){
        if(s[j] === c){
            lastSeen = j;
        }
       let newdistance = lastSeen - j;
        answer[j] = Math.min(answer[j] , newdistance);

    }
    return answer;
};
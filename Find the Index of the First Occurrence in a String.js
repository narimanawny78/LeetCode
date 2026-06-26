// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };

//Another Soltution without Bult-in functions


"sadbutsad"

var strStr = function(haystack, needle) {
    if (needle.length > haystack.length && needle === "") return -1;

    for(let i = 0 ; i <= haystack.length - needle.length; i++ ){
        let flag = true;
        for(let j = 0 ; j < needle.length ; j++){
            if(haystack[i + j] !== needle[j]){
                flag = false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
};

console.log(strStr("sadbutsad", "sad"));
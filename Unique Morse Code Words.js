var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let transformations = new Set();

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let transformation = '';
        for(let j = 0 ; j < word.length ; j++){
            let index = word[j].charCodeAt(0) - "a".charCodeAt(0);
            transformation += morse[index];

        }
        transformations.add(transformation)
    }
    return transformations.size;

};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));
console.log(uniqueMorseRepresentations(["a"]));
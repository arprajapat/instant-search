"use strict";
const minWordLen = process.env.MIN_CHAR_TO_SEARCH || 3;

const calculateScore = (word, wordPos, depth) => {
    // score == 0 => will not appear in search result at all;
    if(depth > word.length) return 0;
    if(depth < minWordLen) return 0 
    if(wordPos == 1) return 1;
    else if(word.length == depth) return 1;
    else return (1/wordPos)*(depth/word.length)
}


module.exports = {
    calculateScore
}
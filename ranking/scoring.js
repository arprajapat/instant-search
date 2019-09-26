const calculateScore = (word, wordPos, depth) => {
    if(depth > word.length) return 0;
    if(depth < 3) return 0
    if(wordPos == 1) return 1;
    else if(word.length == depth) return 1;
    else return (1/wordPos)*(depth/word.length)
}


module.exports = {
    calculateScore
}
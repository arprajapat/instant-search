var express = require('express');
var router = express.Router();
const { parseTextToWords } = require('../cache/utils');
const database = require('../cache/Database')
const searchTrie = require('../cache/Trie')


router.get('/text/:text', async(req, res, next) => {
  const { text } = req.params;

  const words = parseTextToWords(text);

  const results = getIdScoreArray(words);

  let out = [];
  for (let i = 0; i < results.length; i++) {
    const id = results[i].id;
    const score = results[i].score;
    const obj = {
      name: `${database.getById(id).join(' ')}`,
      score: `${score}`
    }
    out.push(obj);
  }

  res.send(out)
})

const getIdScoreArray = (words) => {
  const hashMap = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const idScoreArr = searchTrie.startsWith(word);

    for (let j = 0; j < idScoreArr.length; j++) {
      const id = idScoreArr[j][0];
      const score = idScoreArr[j][1]
      if(!hashMap.has(id)) {
        hashMap.set(id, 0);
      }
      hashMap.set(id, hashMap.get(id) + score);
    }
  }
  return Array.from(hashMap) 
    .sort((a,b) => b[1]-a[1]) // sort array by score
    .map(item => {
      return {
        id: item[0],
        score: (item[1]/words.length)
      }
    });  // normalize score
}
module.exports = router;

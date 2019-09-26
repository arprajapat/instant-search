const fs = require('fs');
const csv = require('csv-parser');
const { parseCSVInput } = require('./cache/utils')

const trie = require('./cache/Trie');
const databaseCache = require('./cache/Database');

// console.log(trie, database)
const init = async () => {
    return new Promise(function(resolve, reject) {
        fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (row) => {
            const words = parseCSVInput(row);
            if(words.length) {
                const id = databaseCache.save(words);
                for(let j=0;j<words.length;j++) {
                    trie.insert(words[j], id, j+1);
                }
            }
            
            // console.log(row)
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            // console.log(trie, databaseCache)
            resolve('data')
        });
    });
}


module.exports = init;
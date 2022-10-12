const natural = require('natural');
const wordTokenizer = new natural.WordTokenizer();
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../resources/documents');

 function searchOneWord(query, results) {
    let matchWord;
    let newResults = [];
    const words = [];

    try {
        var files = fs.readdirSync(directoryPath);
        files.forEach(function (file) {
            const allFileContents = fs.readFileSync('resources/documents/' + file, 'utf-8');
            wordTokenizer.tokenize(allFileContents).forEach(function (word) {
                words.push(word);
            });
        });
    }
    catch (error)
    {
        console.log(error.message)
    }
    
    //console.log(words)

    if (results.length === 0) {
        matchWord = query.match(/\w+\s+_/g);
    } else {
        matchWord = results.map((match) => match.match(/\w+\s+_/g));
    }
    if (matchWord != null) {
        if (results.length === 0) {
            words.forEach((string, index) => {
                let word = query.replaceAll("_", words[index]).trim()
                newResults.push(word)
                //console.log(newResults)
            });
        }
    }
    return [...new Set(newResults)];
}
module.exports = { searchOneWord };
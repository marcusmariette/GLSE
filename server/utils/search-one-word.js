const fs = require('fs');
const path = require('path');
const natural = require('natural');

const wordTokenizer = new natural.WordTokenizer();
const directoryPath = path.join(__dirname, '../resources/documents');

function searchOneWord(searchString) {
    const words = [];

    try {
        var files = fs.readdirSync(directoryPath);
        files.forEach((file) => {
            const allFileContents = fs.readFileSync('resources/documents/' + file, 'utf-8');
            wordTokenizer.tokenize(allFileContents).forEach((word) => {
                words.push(word.toLowerCase());
            });
        });
    } catch (error) {
        console.log(error.message);
    }

    const uniqueWords = new Set(words);
    const results = [];

    uniqueWords.forEach((word) => {
        const newString = searchString.replace('_', word).trim();
        results.push(newString);
    });

    return [...new Set(results)];
}

module.exports = { searchOneWord };

const fs = require('fs');

// Function receives input sentence and looks for instances
// of "n." to represent an noun. Each of these instances
// will be returned in a collection of variations based on the
// knowledge base of nouns (currentlt stored as a txt file).
function searchWithNouns(results) {
    var tempResults = results;

    const newResults = [];
    const allFileContents = fs.readFileSync('resources/pos/nouns.txt', 'utf-8');
    const nouns = allFileContents.split(/\r?\n/);

    var hasNoun = false;
    tempResults.forEach((_sentence) => {
        if (_sentence.includes('n.') && _sentence.length > 0) {
            hasNoun = true;
            nouns.forEach((_noun) => {
                newResults.push(_sentence.replace('n.', _noun));
            });
        }
    });

    if (hasNoun) {
        return searchWithNouns(newResults);
    } else {
        return tempResults;
    }
}
module.exports = { searchWithNouns };

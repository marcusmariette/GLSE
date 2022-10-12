const fs = require('fs');

// Function receives input sentence and looks for instances
// of "adv." to represent an adverb. Each of these instances
// will be returned in a collection of variations based on the
// knowledge base of adverb (currentlt stored as a txt file).
function searchWithAdverbs(results) {
    var tempResults = results;

    const newResults = [];
    const allFileContents = fs.readFileSync('resources/pos/adverbs.txt', 'utf-8');
    const adverbs = allFileContents.split(/\r?\n/);

    var hasAdverbs = false;
    tempResults.forEach((_sentence) => {
        if (_sentence.includes('adv.') && _sentence.length > 0) {
            hasAdverbs = true;
            adverbs.forEach((_adverbs) => {
                newResults.push(_sentence.replace('adv.', _adverbs));
            });
        }
    });

    if (hasAdverbs) {
        return searchWithAdverbs(newResults);
    } else {
        return tempResults;
    }
}
module.exports = { searchWithAdverbs };

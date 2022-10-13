var Promise = require('es6-promise').Promise;
const natural = require('natural');
const wordnet = new natural.WordNet();

function searchWithSynonyms(searchString) {
    return new Promise((resolve) => {
        const results = [];
        const identifiedWord = searchString.match(/~\w+/g);

        if (identifiedWord !== null) {
            const filteredWord = identifiedWord[0].replace('~', '').toLowerCase();
            const wordSynonyms = [];

            wordnet.lookup(filteredWord, (wnResults) => {
                wnResults.forEach((result) => {
                    result.synonyms.forEach((syn) => {
                        const lowerSyn = syn.toLowerCase();
                        if (!wordSynonyms.includes(syn)) {
                            wordSynonyms.push(lowerSyn);
                            results.push(searchString.replace(identifiedWord, lowerSyn));
                        }
                    });
                });

                resolve(results);
            });
        } else {
            resolve(results);
        }
    });
}

module.exports = { searchWithSynonyms };

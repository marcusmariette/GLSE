const natural = require('natural');
const wordnet = new natural.WordNet();

async function searchWithSynonyms(query, results) {
    let newResults = [];
    let wordSynonyms = [];
    let matchSynonym;
    if (results.length === 0) {
        matchSynonym = query.match(/~\w+/g);
    } else {
        matchSynonym = results.map((match) => match.match(/~\w+/g));
    }
    if (matchSynonym != null) {
        newResults = await new Promise((resolve) =>
            matchSynonym.forEach((matchingString, index, array) => {
                let filteredString = matchingString[0].replace('~', '');
                wordnet.lookup(filteredString, (_results) => {
                    _results.forEach((result) => {
                        result.synonyms.forEach((_syn) => {
                            if (_syn.toLowerCase() !== filteredString.toLowerCase() && !wordSynonyms.includes(_syn)) {
                                wordSynonyms.push(_syn);
                                results.forEach((data) => newResults.push(data.replace(matchingString[0], _syn)));
                            }
                        });
                    });
                    if (index === array.length - 1) {
                        // console.log("finale")
                        // console.log(newResults)
                        resolve(newResults);
                    }
                });
            })
        );
    }
    return newResults;
}

module.exports = { searchWithSynonyms };

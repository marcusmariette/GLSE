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
                if (matchingString != null) {
                    let filteredString;
                    if (Array.isArray(matchingString)) {
                        filteredString = matchingString[0].replace('~', '');
                    } else {
                        filteredString = matchingString.replace('~', '');
                    }
                    wordnet.lookup(filteredString, (_results) => {
                        _results.forEach((result) => {
                            result.synonyms.forEach((_syn) => {
                                if (_syn.toLowerCase() !== filteredString.toLowerCase() && !wordSynonyms.includes(_syn)) {
                                    wordSynonyms.push(_syn);
                                    if (results.length > 0) {
                                        results.forEach((data) => newResults.push(data.replace(matchingString[0], _syn)));
                                    } else {
                                        newResults.push(query.replace(matchingString, _syn))
                                    }
                                }
                            });
                        });
                        if (index === array.length - 1) {
                            resolve(newResults);
                        }
                    });
                } else {
                    resolve(results);
                }
            })
        );
    }
    return newResults;
}

module.exports = { searchWithSynonyms };

const helpConfig = require('../config/symbolConfig.json');

function findSearchSymbol(searchString) {
    let symbolFound = null;

    helpConfig.forEach((symbol) => {
        if (searchString.includes(symbol)) symbolFound = symbol;
    });

    return symbolFound;
}

function getStringWithMostWords(stringArray) {
    let resultString = '';

    stringArray.forEach((string) => {
        if (string.split(' ').length > resultString.split(' ').length) {
            resultString = string;
        }
    });

    return resultString;
}

function stripPosTag(searchString) {
    const result = [];
    const wordsInString = searchString.toLowerCase().split(' ');

    let wordStack = [];
    wordsInString.forEach((word) => {
        if (!canStripSymbol(word)) {
            wordStack.push(word);
        } else {
            result.push(wordStack.join(' '));
            wordStack = [];
        }
    });

    if (wordStack.length) {
        result.push(wordStack.join(' '));
    }

    return getStringWithMostWords(result);
}

function canStripSymbol(searchSymbol) {
    const checkTags = ['v.', 'n.', 'adj.', 'adv.', '_'];
    return checkTags.includes(searchSymbol);
}

module.exports = { findSearchSymbol, stripPosTag, getStringWithMostWords, canStripSymbol };

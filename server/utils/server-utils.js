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
    const checkTags = ['v.', 'n.', 'adj.', 'adv.'];
    const wordsInString = searchString.toLowerCase().split(' ');

    let wordStack = [];
    wordsInString.forEach((word) => {
        if (!checkTags.includes(word)) {
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

module.exports = { findSearchSymbol, stripPosTag, getStringWithMostWords };

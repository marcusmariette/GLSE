const fs = require('fs');

function searchWithPOS(searchString, filename, symbol) {
    const allFileContents = fs.readFileSync('resources/pos/' + filename + '.txt', 'utf-8');
    const pos = allFileContents.split(/\r?\n/);

    const results = [];
    if (searchString !== null) {
        pos.forEach((word) => {
            results.push(searchString.replace(symbol, word));
        });
    }

    return results ? results : null;
}

module.exports = { searchWithPOS };

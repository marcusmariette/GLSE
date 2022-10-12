function searchWithOptional(searchString) {
    const results = [];
    const optionalWord = searchString.match(/\?\w+/g);

    if (optionalWord !== null) {
        results.push(searchString.replace('?', ''));
        results.push(searchString.replace(optionalWord, '').replace(/\s+/g, ' ').trim());
    }

    return results;
}

module.exports = { searchWithOptional };

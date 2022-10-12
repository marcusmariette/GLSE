function searchWithOr(searchString) {
    const results = [];
    const options = searchString.match(/\w+\/\w+/g);

    if (options !== null) {
        const words = options[0].split('/');
        words.forEach((word) => {
            results.push(searchString.replace(options, word));
        });
    }

    return results;
}

module.exports = { searchWithOr };

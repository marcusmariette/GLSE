const { searchWithSynonyms } = require('../utils/search-synonyms');

describe('Search Query: Optional Tests', () => {
    test('Given searching with synonym symbol, when querying, then it returns new results', () => {
        let result = searchWithSynonyms('good ~night', []);

        expect(result).resolves.toEqual(['good Nox', 'good nighttime', 'good dark']);
    });

    test('Given searching with synonym symbols, when querying with results, then it returns new results', () => {
        let result = searchWithSynonyms('good/bad ~night', ['good ~night', 'bad ~night']);

        expect(result).resolves.toEqual([
            'good Nox',
            'bad Nox',
            'good nighttime',
            'bad nighttime',
            'good dark',
            'bad dark',
        ]);
    });

    test('Given searching with no synonym symbol, when querying with results, then it returns results', () => {
        let result = searchWithSynonyms('hi/hello world', ['hi world', 'hello world']);

        expect(result).resolves.toEqual(['hi world', 'hello world']);
    });
});

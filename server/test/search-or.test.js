const { searchWithOr } = require('../utils/search-or');

describe('Search with OR tests', () => {
    test('Given a search string, when searching with OR, then it returns results', () => {
        const result = searchWithOr("hello/hi world")
        expect(result).toEqual([ 'hello world', 'hi world' ])
    });

    test('Given an empty search string, when searching with OR, then it returns empty results', () => {
        const result = searchWithOr("")
        expect(result.length).toBe(0)
    });
});
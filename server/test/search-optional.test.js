const { searchWithOptional } = require('../utils/search-optional');

describe('Search with Optional tests', () => {
    test('Given a search string, when searching with Optional, then it returns results', () => {
        const result = searchWithOptional('hello ?world');
        expect(result).toEqual(['hello world', 'hello']);
    });

    test('Given an empty search string, when searching with Optional, then it returns empty results', () => {
        const result = searchWithOptional('');
        expect(result.length).toBe(0);
    });
});

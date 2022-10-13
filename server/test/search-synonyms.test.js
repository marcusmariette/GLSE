const { searchWithSynonyms } = require('../utils/search-synonyms');

describe('Search with synonyms tests', () => {
    test('Given a search string, when searching with synonyms, then it returns results', async () => {
        const result = searchWithSynonyms('good ~night');
        await result.then((value) => {
            expect(value).toEqual(['good nox', 'good night', 'good nighttime', 'good dark']);
        });
    });
    //
    test('Given an empty search string, when searching with synonyms, then it returns empty results', async () => {
        const result = searchWithSynonyms('');
        await result.then((value) => {
            expect(value.length).toBe(0);
        });
    });
});

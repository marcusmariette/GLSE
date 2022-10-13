jest.mock('fs');
const fs = require('fs');

const { searchOneWord } = require('../utils/search-one-word');

describe('Search one word tests', () => {
    test('Given a search string, when searching with one word, then it returns', () => {
        fs.readdirSync.mockReturnValue(['file.txt']);
        fs.readFileSync.mockReturnValue('world dude man');

        const result = searchOneWord('hello _');
        expect(result).toEqual(['hello world', 'hello dude', 'hello man']);
    });

    test('Given a search string, when searching with one word, then it returns', () => {
        fs.readdirSync.mockReturnValue(['file.txt', 'file2.txt']);
        fs.readFileSync.mockReturnValue('morning night day');
        const result = searchOneWord('good _');

        expect(result).toEqual(['good morning', 'good night', 'good day']);
    });
});

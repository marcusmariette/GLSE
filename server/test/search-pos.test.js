jest.mock('fs')
const fs = require('fs')

const { searchWithPOS } = require('../utils/search-pos');

describe('Search with POS tests', () => {
    test('Given adjective and search string, when searching with POS, then it returns', () => {
        fs.readdirSync.mockReturnValue(["adjectives.txt"])
        fs.readFileSync.mockReturnValue("cool\r\nfunny\r\ncalm")

        const result = searchWithPOS("adj. person", "adjectives", "adj.")
        expect(result).toEqual(["cool person", "funny person", "calm person"])
    });

    test('Given noun and search string, when searching with POS, then it returns', () => {
        fs.readdirSync.mockReturnValue(["nouns.txt"])
        fs.readFileSync.mockReturnValue("plant\r\ntree\r\nchild")

        const result = searchWithPOS("growing n.", "nouns", "n.")
        expect(result).toEqual(["growing plant", "growing tree", "growing child"])
    });

    test('Given adverb and search string, when searching with POS, then it returns', () => {
        fs.readdirSync.mockReturnValue(["adverbs.txt"])
        fs.readFileSync.mockReturnValue("firmly\r\ntightly\r\ncalmly")

        const result = searchWithPOS("he held adv.", "adverbs", "adv.")
        expect(result).toEqual(["he held firmly", "he held tightly", "he held calmly"])
    });

    test('Given verbs and search string, when searching with POS, then it returns', () => {
        fs.readdirSync.mockReturnValue(["verbs.txt"])
        fs.readFileSync.mockReturnValue("ran\r\nthrew\r\njumps")

        const result = searchWithPOS("he v.", "verbs", "v.")
        expect(result).toEqual(["he ran", "he threw", "he jumps"])
    });

});

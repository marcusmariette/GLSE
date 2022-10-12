const { findSearchSymbol, getStringWithMostWords, stripPosTag, canStripSymbol } = require('../utils/server-utils');

describe('Server Utils', () => {
    describe('findSearchSymbol', () => {
        test('Find the / symbol', () => {
            const result = findSearchSymbol('hello/hi');
            expect(result).toBe('/');
        });

        test('Find the ~ symbol', () => {
            const result = findSearchSymbol('the ~nice man');
            expect(result).toBe('~');
        });

        test('Find the _ symbol', () => {
            const result = findSearchSymbol('the cat and the _');
            expect(result).toBe('_');
        });

        test('Find the ? symbol', () => {
            const result = findSearchSymbol('I am ?very smart');
            expect(result).toBe('?');
        });

        test('Find the v. symbol', () => {
            const result = findSearchSymbol('I v. onto the car');
            expect(result).toBe('v.');
        });

        test('Find the n. symbol', () => {
            const result = findSearchSymbol('The n. was very tall');
            expect(result).toBe('n.');
        });

        test('Find the adj. symbol', () => {
            const result = findSearchSymbol('The adj. scientist');
            expect(result).toBe('adj.');
        });

        test('Find the adv. symbol', () => {
            const result = findSearchSymbol('I am adv. excited');
            expect(result).toBe('adv.');
        });

        test('Return null if no symbol found', () => {
            const result = findSearchSymbol('I do not have a symbol');
            expect(result).toBe(null);
        });
    });

    describe('getStringWithMostWords', () => {
        test('Should return the string with the most words', () => {
            const result = getStringWithMostWords(['hello', 'hello there test', 'another string']);
            expect(result).toBe('hello there test');
        });
    });

    describe('stripPosTag', () => {
        test('Should strip the v. tag correctly', () => {
            const result = stripPosTag('this v. should be gone');
            expect(result).toBe('should be gone');
        });

        test('Should strip the n. tag correctly', () => {
            const result = stripPosTag('this n. should disappear');
            expect(result).toBe('should disappear');
        });

        test('Should strip the adj. tag correctly', () => {
            const result = stripPosTag('the adj. will be stripped');
            expect(result).toBe('will be stripped');
        });

        test('Should strip the adv. tag correctly', () => {
            const result = stripPosTag('I adv. shall strip');
            expect(result).toBe('shall strip');
        });

        test('Should strip the _ tag correctly', () => {
            const result = stripPosTag('the dog and the _');
            expect(result).toBe('the dog and the');
        });

        test('Should push empty string if at the end', () => {
            const result = stripPosTag('do not v.');
            expect(result).toBe('do not');
        });
    });

    describe('canStripSymbol', () => {
        test('should return true for v.', () => {
            const result = canStripSymbol('v.');
            expect(result).toBe(true);
        });

        test('should return true for v.', () => {
            const result = canStripSymbol('n.');
            expect(result).toBe(true);
        });

        test('should return true for v.', () => {
            const result = canStripSymbol('adj.');
            expect(result).toBe(true);
        });

        test('should return true for v.', () => {
            const result = canStripSymbol('adv.');
            expect(result).toBe(true);
        });

        test('should return true for _', () => {
            const result = canStripSymbol('_');
            expect(result).toBe(true);
        });

        test('should return false for another word or symbol', () => {
            const result = canStripSymbol('/');
            expect(result).toBe(false);
        });
    });
});

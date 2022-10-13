import { findSymbols, validateSymbolRegex } from './validationUtils';

describe('ValidationUtils Tests', () => {
    describe('findSymbols Testing', () => {
        test('should return array when / symbol is in string', () => {
            const result = findSymbols('should/maybe work');
            expect(result).toStrictEqual(['/']);
        });

        test('should return array when ? symbol is in string', () => {
            const result = findSymbols('this ?should work');
            expect(result).toStrictEqual(['?']);
        });

        test('should return array when ~ symbol is in string', () => {
            const result = findSymbols('validating ~this');
            expect(result).toStrictEqual(['~']);
        });

        test('should return array when v. symbol is in string', () => {
            const result = findSymbols('checking v. works');
            expect(result).toStrictEqual(['v.']);
        });

        test('should return array when n. symbol is in string', () => {
            const result = findSymbols('checking n. works');
            expect(result).toStrictEqual(['n.']);
        });

        test('should return array when adj. symbol is in string', () => {
            const result = findSymbols('checking adj. works');
            expect(result).toStrictEqual(['adj.']);
        });

        test('should return array when adv. symbol is in string', () => {
            const result = findSymbols('checking adv. works');
            expect(result).toStrictEqual(['adv.']);
        });

        test('should return array when _ symbol is in string', () => {
            const result = findSymbols('some _ tests');
            expect(result).toStrictEqual(['_']);
        });

        test('should return array with multiple symbols if provided', () => {
            const result = findSymbols('some _ tests are very adj. today/tomorrow');
            expect(result).toStrictEqual(['_', 'adj.', '/']);
        });

        test('should return empty array if regex does not match anything', () => {
            const result = findSymbols('sometimes there are no symbols');
            expect(result).toStrictEqual([]);
        });
    });

    describe('validateSymbolRegex', () => {
        describe('OR', () => {
            test('should null validationError when valid / is used', () => {
                const validationError = validateSymbolRegex('should/maybe work', '/');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid / is used', () => {
                const validationError = validateSymbolRegex('should not/ work', '/');
                expect(validationError).toBe('Error: OR Symbol Invalid. (Correct Usage: I am/are happy)');
            });
        });

        describe('Optional', () => {
            test('should null validationError when valid ? is used', () => {
                const validationError = validateSymbolRegex('should ?work', '?');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid ? is used', () => {
                const validationError = validateSymbolRegex('should?not work', '?');
                expect(validationError).toBe('Error: Optional Symbol Invalid. (Correct Usage: I feel ?very good)');
            });
        });

        describe('Synonym', () => {
            test('should null validationError when valid ~ is used', () => {
                const validationError = validateSymbolRegex('should ~work', '~');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid ~ is used', () => {
                const validationError = validateSymbolRegex('should~not work', '~');
                expect(validationError).toBe('Error: Synonym Symbol Invalid. (Correct Usage: The ~nice lady)');
            });
        });

        describe('One Word', () => {
            test('should null validationError when valid _ is used', () => {
                const validationError = validateSymbolRegex('should _ work', '_');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid _ is used', () => {
                const validationError = validateSymbolRegex('should_not work', '_');
                expect(validationError).toBe('Error: One Word Symbol Invalid. (Correct Usage: I _ apples)');
            });
        });

        describe('Verb', () => {
            test('should null validationError when valid v. is used', () => {
                const validationError = validateSymbolRegex('should v. work', 'v.');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid v. is used', () => {
                const validationError = validateSymbolRegex('should v.not work', 'v.');
                expect(validationError).toBe('Error: Verb Symbol Invalid. (Correct Usage: I enjoy to v. around)');
            });
        });

        describe('Noun', () => {
            test('should null validationError when valid n. is used', () => {
                const validationError = validateSymbolRegex('should n. work', 'n.');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid n. is used', () => {
                const validationError = validateSymbolRegex('should n.not work', 'n.');
                expect(validationError).toBe('Error: Noun Symbol Invalid. (Correct Usage: Look at the n. over there)');
            });
        });

        describe('Adjective', () => {
            test('should null validationError when valid adj. is used', () => {
                const validationError = validateSymbolRegex('should adj. work', 'adj.');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid adj. is used', () => {
                const validationError = validateSymbolRegex('should adj.not work', 'adj.');
                expect(validationError).toBe('Error: Adjective Symbol Invalid. (Correct Usage: I am very adj. today)');
            });
        });

        describe('Adverb', () => {
            test('should null validationError when valid adv. is used', () => {
                const validationError = validateSymbolRegex('should adv. work', 'adv.');
                expect(validationError).toBe(null);
            });

            test('should validationError when invalid adv. is used', () => {
                const validationError = validateSymbolRegex('should adv.not work', 'adv.');
                expect(validationError).toBe('Error: Adverb Symbol Invalid. (Correct Usage: It is very adv. for me)');
            });
        });
    });
});

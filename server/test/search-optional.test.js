const { searchWithOptional } = require('../utils/search-optional');

describe("Search Query: Optional Tests", () => {
    test("Given searching with optional symbols, when querying, then it returns new results", () => {
        let result = searchWithOptional("hello ?there ?world ", [])

        expect(result).toEqual(["hello world", "hello there", "hello there world", "hello"]);
    });

    test("Given searching with optional symbol, when querying, then it returns new results", () => {
        let result = searchWithOptional("hello ?world", [])

        expect(result).toEqual(["hello", "hello world"]);
    });

    test("Given searching with optional symbol, when querying with results, then it returns new results", () => {
        let result = searchWithOptional("hello/hi ?world", ["hello ?world", "hi ?world"])

        expect(result).toEqual(["hello", "hello world", "hi", "hi world"]);
    });

    test("Given searching with no optional symbol, when querying with results, then it returns results", () => {
        let result = searchWithOptional("hi/hello world", ["hi world", "hello world"])

        expect(result).toEqual(["hi world", "hello world"]);
    });
})
const { searchWithOr } = require('../utils/search-or');

describe("Search Query: OR Tests", () => {
    test("Given searching with OR symbols, when querying, then it returns new results", () => {
        let result = searchWithOr("hello/hi world/worlds", searchWithOr, [])

        expect(result).toEqual(["hello world", "hi world", "hello worlds", "hi worlds"]);
    });

    test("Given searching with OR symbol, when querying, then it returns new results", () => {
        let result = searchWithOr("hello/hi world", searchWithOr, [])

        expect(result).toEqual(["hello world", "hi world"]);
    });

    test("Given searching with no OR symbol, when querying, then it returns results", () => {
        let result = searchWithOr("hello world", searchWithOr, [])

        expect(result.length).toBe(0);
    });
})
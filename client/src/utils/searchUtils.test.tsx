import { getTotalCount, populateSentenceData } from './searchUtils';

describe('SearchUtils Tests', () => {
    describe('getTotalCount', () => {
        test('should return the total count of sentences', () => {
            const mockData = [
                { sentence: 'this test', count: 10 },
                { sentence: 'this test', count: 5 },
            ];

            const result = getTotalCount(mockData);
            expect(result).toBe(15);
        });

        test('should not return more than 25 values', () => {
            const mockData: Array<any> = [];
            for (let i = 0; i < 30; i++) {
                mockData.push({ sentence: `number ${i}`, count: 1 });
            }

            const result = getTotalCount(mockData);
            expect(result).toBe(25);
        });
    });

    describe('populateSentenceData', () => {
        test('should return the total count of sentences', () => {
            const totalCount = 100;
            const mockData = [
                { sentence: 'first sentence', count: 20 },
                { sentence: 'second sentence', count: 80 },
            ];

            const result = populateSentenceData(mockData, totalCount);
            expect(result[0].occurrencePercentage).toBe(20);
            expect(result[1].occurrencePercentage).toBe(80);
        });

        test('should not return more than 25 values', () => {
            const totalCount = 100;
            const mockData: Array<any> = [];
            for (let i = 0; i < 30; i++) {
                mockData.push({ sentence: `number ${i}`, count: 5 });
            }

            const result = populateSentenceData(mockData, totalCount);
            expect(result[0].occurrencePercentage).toBe(5);
        });
    });
});

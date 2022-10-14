import { SearchResultItem } from '../types';

const MAX_RESULTS = 25;

export const getTotalCount = (results) => {
    let totalCount = 0;
    results.forEach((sentence, index) => {
        if (index < MAX_RESULTS) {
            totalCount += sentence.count;
        }
    });

    return totalCount;
};

export const populateSentenceData = (results, totalCount) => {
    const sentencesData: Array<SearchResultItem> = [];
    results.forEach((result, index) => {
        if (index < MAX_RESULTS) {
            sentencesData.push({
                sentence: result.sentence,
                occurrencePercentage: Math.floor((result.count / totalCount) * 100),
            });
        }
    });

    return sentencesData;
};

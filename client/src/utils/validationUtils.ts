export const findSymbols = (searchString: string) => {
    const foundSymbols: string[] = [];

    const regex = new RegExp(/_|v\.|n\.|adj\.|adv\.|\/|~|\?/g);
    const regexResults = searchString.match(regex);
    if (regexResults) regexResults.forEach((result) => foundSymbols.push(result));

    return foundSymbols;
};

export const validateSymbolRegex = (searchString: string, searchSymbol: string) => {
    let validationError: string | null = null;
    switch (searchSymbol) {
        case '/':
            if (searchString.toLowerCase().match(/\w+\/\w+/g) === null) {
                validationError = 'Error: OR Symbol Invalid. (Correct Usage: I am/are happy)';
            }
            break;
        case '?':
            if (searchString.toLowerCase().match(/\B\?\w+/g) === null) {
                validationError = 'Error: Optional Symbol Invalid. (Correct Usage: I feel ?very good)';
            }
            break;
        case '~':
            if (searchString.toLowerCase().match(/\B~\w+/g) === null) {
                validationError = 'Error: Synonym Symbol Invalid. (Correct Usage: The ~nice lady)';
            }
            break;
        case '_':
            if (searchString.toLowerCase().match(/\b_\b/g) === null) {
                validationError = 'Error: One Word Symbol Invalid. (Correct Usage: I _ apples)';
            }
            break;
        case 'v.':
            if (searchString.toLowerCase().match(/\bv\.\B/g) === null) {
                validationError = 'Error: Verb Symbol Invalid. (Correct Usage: I enjoy to v. around)';
            }
            break;
        case 'n.':
            if (searchString.toLowerCase().match(/\bn\.\B/g) === null) {
                validationError = 'Error: Noun Symbol Invalid. (Correct Usage: Look at the n. over there)';
            }
            break;
        case 'adj.':
            if (searchString.toLowerCase().match(/\badj\.\B/g) === null) {
                validationError = 'Error: Adjective Symbol Invalid. (Correct Usage: I am very adj. today)';
            }
            break;
        case 'adv.':
            if (searchString.toLowerCase().match(/\badv\.\B/g) === null) {
                validationError = 'Error: Adverb Symbol Invalid. (Correct Usage: It is very adv. for me)';
            }
            break;
    }

    return validationError;
};

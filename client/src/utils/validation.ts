export const validateSearchString = (searchString: string) => {
    let count = 0;
    const knownSymbols = ['/', '?', '~'];
    knownSymbols.forEach((symbol) => (count += searchString.split(symbol).length - 1));
    return count === 1;
};

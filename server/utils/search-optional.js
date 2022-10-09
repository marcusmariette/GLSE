function searchWithOptional(query, results) {
    let newResults = [];
    let matchOptional;
    let matched = query.match(/\?\w+/g)
    if (results.length === 0) {
        matchOptional = matched;
    } else {
        matchOptional = results.map((match) => match.match(/\?\w+/g));
    }
    if (matchOptional != null && matched != null) {
        if (results.length === 0) {
            matchOptional.forEach((string, index) => {
                let wordWithSelectedOptional = query.replace(matchOptional[index], "").replace("?", "");
                newResults.push(removeWhiteSpaceFrom(wordWithSelectedOptional))

                if (matchOptional.length - 1 === index) {
                    let wordWithOptionals = query.replaceAll("?", "").trim()
                    newResults.push(wordWithOptionals)

                    let wordWithoutOptionals = query.replaceAll(/\?\w+/g, "")
                    newResults.push(removeWhiteSpaceFrom(wordWithoutOptionals))
                }
            });
        } else {
            results.forEach(result => {
                matchOptional.forEach((string, index) => {
                    let wordWithSelectedOptional = result.replace(matchOptional[index], "").replace("?", "");
                    newResults.push(removeWhiteSpaceFrom(wordWithSelectedOptional))

                    if (matchOptional.length - 1 === index) {
                        let wordWithOptionals = result.replaceAll("?", "").trim()
                        newResults.push(wordWithOptionals)

                        let wordWithoutOptionals = result.replaceAll(/\?\w+/g, "")
                        newResults.push(removeWhiteSpaceFrom(wordWithoutOptionals))
                    }
                });
            })
        }
        // remove duplicates
        return [...new Set(newResults)];
    } else {
        return results;
    }
}

function removeWhiteSpaceFrom(string) {
    return string.replace(/\s+/g, " ").trim()
}

module.exports = {searchWithOptional};
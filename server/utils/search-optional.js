function searchWithOptional(query, results) {
    let newResults = [];
    let matchOptional;
    if (results.length === 0) {
        matchOptional = query.match(/\?\w+/g);
    } else {
        matchOptional = results.map((match) => match.match(/\?\w+/g));
    }
    if (matchOptional != null) {
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
    }
    return newResults;
}

function removeWhiteSpaceFrom(string) {
    return string.replace(/\s+/g, " ").trim()
}

module.exports = {searchWithOptional};
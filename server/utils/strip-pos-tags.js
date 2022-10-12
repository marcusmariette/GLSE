function stripPosTags(query) {
    var result = [];
    const checkTags = [
        'v.',
        'n.',
        'adj.',
        'adv.',
        "prep.",
    ];

    var words = query.toLowerCase().split(" ");
    var wordStack = [];
    words.forEach((_word) => {
        if(!checkTags.includes(_word)) {
            wordStack.push(_word);
        } else {
            result.push(wordStack.join(" "));
            wordStack = [];
        }
    });

    if(wordStack.length) {
        result.push(wordStack.join(" "));
    }
    
    return result;
}

module.exports = { stripPosTags };

const fs = require('fs');
const path = require('path');
const express = require('express');

const { searchWithPOS } = require('./utils/search-pos');
const { searchOneWord } = require('./utils/search-one-word');
const { findSearchSymbol, stripPosTag } = require('./utils/server-utils');

const app = express();
const directoryPath = path.join(__dirname, 'resources/documents');

app.listen(3001, () => {
    console.log('GLSE Backend Server Started on Port 3001...');
});

app.get('/getResults', async (req, res) => {
    const responseData = {
        status: 0,
        message: '',
        match: [],
    };

    let queryResults = [];
    const returnResults = [];

    const searchQuery = req.query.search;

    if (searchQuery !== null) {
        const searchSymbol = findSearchSymbol(searchQuery);

        if (searchSymbol !== null) {
            switch (searchSymbol) {
                case '/':
                    console.log('OR Unsupported');
                    break;
                case '~':
                    console.log('Synonyms Unsupported');
                    break;
                case '_':
                    queryResults = searchOneWord(searchQuery);
                    break;
                case '?':
                    console.log('Optional Unsupported');
                    break;
                case 'v.':
                    queryResults = searchWithPOS(searchQuery, 'verbs', searchSymbol);
                    break;
                case 'n.':
                    queryResults = searchWithPOS(searchQuery, 'nouns', searchSymbol);
                    break;
                case 'adj.':
                    queryResults = searchWithPOS(searchQuery, 'adjectives', searchSymbol);
                    break;
                case 'adv.':
                    queryResults = searchWithPOS(searchQuery, 'adverbs', searchSymbol);
                    break;
            }

            if (queryResults !== []) {
                const kbFilter = stripPosTag(searchQuery);

                let knowledgeBaseContent;

                // If we want to check the database/filesystem for existing queries run
                // if (fs.existsSync('resources/results/' + req.query.search.toLowerCase().replaceAll(' ', '+')) + '.json') {
                //     var resultData = fs.readFileSync(
                //         'resources/results/' + req.query.search.toLowerCase().replaceAll(' ', '+') + '.json',
                //         'utf-8'
                //     );

                //     responseData.status = 1;
                //     responseData.message = 'success';
                //     responseData.sentences = JSON.parse(resultData);

                //     res.json(responseData);
                // }

                fs.readdir(directoryPath, (error, files) => {
                    if (error) return console.log('Unable to scan directory: ' + err);

                    files.forEach((file) => {
                        knowledgeBaseContent += fs.readFileSync('resources/documents/' + file, 'utf-8');
                    });

                    const allSentences = knowledgeBaseContent.match(/[^\.!\?]+[\.!\?]+/g);
                    const allValidKBSentences = [];

                    allSentences.forEach((sentence) => {
                        if (sentence.toLowerCase().match(new RegExp('\\b' + kbFilter + '\\b'))) {
                            allValidKBSentences.push(sentence);
                        }
                    });

                    queryResults.forEach((result) => {
                        const regExSearch = allValidKBSentences
                            .join(' ')
                            .toLowerCase()
                            .match(new RegExp('\\b' + result.toLowerCase() + '\\b', 'g'));
                        if (regExSearch) {
                            const sentenceInstanceCount = regExSearch.length;
                            if (sentenceInstanceCount > 0) {
                                returnResults.push({
                                    sentence: result,
                                    count: sentenceInstanceCount,
                                });
                            }
                        }
                    });

                    responseData.status = 200;
                    responseData.message = 'success';
                    responseData.match = returnResults;
                    res.json(responseData);

                    // If we want to save the results to the database/filesystem
                    // if (sentences.length > 0) {
                    //     fs.writeFileSync(
                    //         'resources/results/' + req.query.search.toLowerCase().replaceAll(' ', '+') + '.json',
                    //         JSON.stringify(sentences)
                    //     );
                    // }
                });
            }
        }
    }
});

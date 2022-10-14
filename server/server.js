const fs = require('fs');
const path = require('path');
const express = require('express');
const md5 = require('md5');

const { searchWithPOS } = require('./utils/search-pos');
const { searchOneWord } = require('./utils/search-one-word');
const { searchWithOr } = require('./utils/search-or');
const { searchWithOptional } = require('./utils/search-optional');
const { searchWithSynonyms } = require('./utils/search-synonyms');
const { findSearchSymbol, stripPosTag, canStripSymbol } = require('./utils/server-utils');

const app = express();

app.listen(3001, () => {
    console.log('GLSE Backend Server Started on Port 3001...');
});

app.get('/getResults', async (req, res) => {
    const startTime = performance.now();

    res.set('Access-Control-Allow-Origin', '*');
    const responseData = {
        status: 0,
        message: '',
        match: [],
    };

    let queryResults = [];
    const returnResults = [];
    const searchQuery = req.query.search;

    if (searchQuery !== null) {
        console.log('Search Query: ' + searchQuery);
        const searchSymbol = findSearchSymbol(searchQuery);
        const fileNameAsMD5 = md5(req.query.search.toLowerCase());

        // If we want to check the database/filesystem for existing queries run
        if (fs.existsSync('resources/results/' + fileNameAsMD5 + '.json')) {
            var resultData = fs.readFileSync('resources/results/' + fileNameAsMD5 + '.json', 'utf-8');

            console.log('Found existing file in database cache');
            const endTime = performance.now();
            console.log('Operation Time:', Math.floor(endTime - startTime) / 1000, 's\n');

            responseData.status = 200;
            responseData.message = 'success';
            responseData.match = JSON.parse(resultData);
            res.json(responseData);
        } else {
            if (searchSymbol !== null) {
                switch (searchSymbol) {
                    case '/':
                        queryResults = searchWithOr(searchQuery);
                        break;
                    case '~':
                        await searchWithSynonyms(searchQuery).then((data) => (queryResults = data));
                        break;
                    case '_':
                        queryResults = searchOneWord(searchQuery);
                        break;
                    case '?':
                        queryResults = searchWithOptional(searchQuery);
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
                    console.log('Query Result Size: ', queryResults.length);
                    let knowledgeBaseContent;
                    const directoryPath = path.join(__dirname, 'resources/documents');

                    fs.readdir(directoryPath, (error, files) => {
                        if (error) return console.error('Unable To Scan Directory: ' + error);

                        files.forEach((file) => {
                            knowledgeBaseContent += fs.readFileSync('resources/documents/' + file, 'utf-8');
                        });

                        const allSentences = knowledgeBaseContent.match(/[^\.!\?]+[\.!\?]+/g);
                        const allValidKBSentences = [];

                        // Reduce Sentences for Symbols that can be stripped
                        if (canStripSymbol(searchSymbol)) {
                            const kbFilter = stripPosTag(searchQuery);
                            console.log('Can Strip Symbol. Filter: ' + kbFilter);
                            allSentences.forEach((sentence) => {
                                if (sentence.toLowerCase().match(new RegExp('\\b' + kbFilter + '\\b'))) {
                                    allValidKBSentences.push(sentence);
                                }
                            });

                            console.log('allValidKBSentences size:', allValidKBSentences.length);
                        } else {
                            allSentences.forEach((sentence) => allValidKBSentences.push(sentence));
                            console.log('Cannot Strip Symbol.');
                            console.log('allSentences size:', allSentences.length);
                        }

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

                        // If we want to save the results to the database/filesystem
                        if (returnResults.length > 0) {
                            fs.writeFileSync('resources/results/' + fileNameAsMD5 + '.json', JSON.stringify(returnResults));
                        }

                        const endTime = performance.now();
                        console.log('Operation Time:', Math.floor(endTime - startTime) / 1000, 's\n');

                        responseData.status = 200;
                        responseData.message = 'success';
                        responseData.match = returnResults;
                        res.json(responseData);
                    });
                } else {
                    responseData.status = 400;
                    responseData.message = 'Error: Query Invalid';
                    res.json(responseData);
                }
            } else {
                responseData.status = 400;
                responseData.message = 'Error: No Symbol Provided';
                res.json(responseData);
            }
        }
    }
});

module.exports = app;

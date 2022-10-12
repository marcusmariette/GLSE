require('dotenv').config();
const express = require('express');
const app = express();
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const sentenceTokenizer = new natural.SentenceTokenizer();
const wordnet = new natural.WordNet();
const firebase = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const { searchWithOr } = require('./utils/search-or');
const { searchWithSynonyms } = require('./utils/search-synonyms');
const { searchWithOptional } = require('./utils/search-optional');
const { searchOneWord } = require('./utils/search-one-word');
const { searchWithAdjectives } = require('./utils/search-adjective');
const { stripPosTags } = require('./utils/strip-pos-tags');

const directoryPath = path.join(__dirname, 'resources/documents');

app.listen(3001, () => {
    console.log('GLSE Backend Server Started on Port 3001...');
});

app.get('/wordnet', (req, res) => {
    wordnet.lookup(req.query.word, (results) => {
        results.forEach((result) => {
            console.log('----------------------------');
            console.log(result.synonyms);
        });
    });
    res.json({ success: 1 });
});

app.get('/keywords', async (req, res) => {
    const responseData = {
        status: 0,
        message: '',
        match: [],
    };

    let query = req.query.search;
    if (query !== undefined) {
        let results = [];

        results = searchWithOr(query, searchWithOr, results);
        results = searchWithOptional(query, results);
        results = searchOneWord(query, results);
        await searchWithSynonyms(query, results).then((value) => (results = value));

        responseData.status = 1;
        responseData.message = 'success';
        responseData.match = results;
        // Search all files with results array

        res.json(responseData);
    } else {
        responseData.message = 'search string not provided.';
        res.json(responseData);
    }
});

app.get('/getSentences', (req, res) => {
    const sentences = [];
    const responseData = {
        status: 0,
        message: '',
        sentenceCount: 0,
        sentences: sentences,
    };

    if (req.query.search !== undefined) {
        // NOTE: You need to feed the array result from each searchWithX
        // into the next function call.

        // Adjective Check
        var adjectiveSentenceVariations = searchWithAdjectives([req.query.search]);

        // Verb Check
        // ...

        // Noun Check
        // ...

        // Adverb Check
        // ...

        // Final Sentence Set
        const allSentences = adjectiveSentenceVariations;

        var checkExistString = stripPosTags(req.query.search).join('|');
        var knowledgeBaseContent;

        // Check if result has already been generated
        if (fs.existsSync('resources/results/' + req.query.search.toLowerCase().replaceAll(' ', '+')) + '.json') {
            var resultData = fs.readFileSync(
                'resources/results/' + req.query.search.toLowerCase().replaceAll(' ', '+') + '.json',
                'utf-8'
            );

            responseData.status = 1;
            responseData.message = 'success';
            responseData.sentences = JSON.parse(resultData);

            res.json(responseData);
        } else {
            console.log('[ - ] Result Doest Exists!');
            fs.readdir(directoryPath, function (err, files) {
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                }

                files.forEach(function (file) {
                    knowledgeBaseContent += fs.readFileSync('resources/documents/' + file, 'utf-8');
                });

                const allValidKBSentences = [];
                const _sentences = knowledgeBaseContent.match(/[^\.!\?]+[\.!\?]+/g);

                _sentences.forEach((_sentence) => {
                    if (_sentence.includes(checkExistString.split('|')[0])) {
                        allValidKBSentences.push(_sentence);
                    }
                });

                allSentences.forEach((_processedSentence) => {
                    const regExSearch = allValidKBSentences
                        .join(' ')
                        .toLowerCase()
                        .match(new RegExp(_processedSentence.toLowerCase(), 'g'));
                    if (regExSearch) {
                        const sentenceInstanceCount = regExSearch.length;
                        if (sentenceInstanceCount > 0) {
                            sentences.push({
                                sentence: _processedSentence,
                                count: sentenceInstanceCount,
                            });
                        }
                    }
                });

                if (sentences.length > 0) {
                    fs.writeFileSync(
                        'resources/results/' + req.query.search.toLowerCase().replaceAll(' ', '+') + '.json',
                        JSON.stringify(sentences)
                    );
                }

                responseData.status = 1;
                responseData.message = 'success';
                responseData.sentences = sentences;
                res.json(responseData);
            });
        }
    } else {
        responseData.message = 'No phrase was provided.';
        res.json(responseData);
    }
});

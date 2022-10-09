require('dotenv').config()
const express = require('express')
const app = express()
const natural = require('natural')
const tokenizer = new natural.WordTokenizer()
const sentenceTokenizer = new natural.SentenceTokenizer()
const wordnet = new natural.WordNet()
const firebase = require('firebase-admin')
const fs = require('fs')
const path = require('path')
require('firebase/firestore')
const { searchWithOr } = require('./utils/search-or')
const { searchWithSynonyms } = require('./utils/search-synonyms')
const { searchWithAdjectives } = require('./utils/search-adjective')

const directoryPath = path.join(__dirname, 'resources/documents')

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

app.listen(3001, () => {
    console.log('GLSE Backend Server Started on Port 3001...')
})

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.get('/wordnet', (req, res) => {
    wordnet.lookup(req.query.word, (results) => {
        results.forEach((result) => {
            console.log('----------------------------')
            console.log(result.synonyms)
        })
    })
    res.json({ success: 1 })
})

app.get('/query', (req, res) => {
    var instanceCount = 0
    const responseData = {
        status: 0,
        message: '',
        data: '',
    }

    if (req.query.search !== undefined) {
        fs.readdir(directoryPath, function (err, files) {
            // handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err)
            }
            // listing all files using forEach
            var output = ''
            files.forEach(function (file) {
                const allFileContents = fs.readFileSync(
                    'resources/documents/' + file,
                    'utf-8'
                )
                allFileContents.split(/\r?\n/).forEach((line) => {
                    output += line
                })
            })

            instanceCount =
                output.toLowerCase().split(req.query.search.toLowerCase())
                    .length - 1

            responseData.status = 1
            responseData.message = 'success'
            responseData.data = instanceCount

            res.json(responseData)
        })
    } else {
        responseData.message = 'search string not provided.'
        res.json(responseData)
    }
})

app.get('/keywords', async (req, res) => {
    const responseData = {
        status: 0,
        message: '',
        match: [],
    }

    let query = req.query.search
    if (query !== undefined) {
        let results = []
        let matchOR = query.match(/\w+\/\w+/g)
        if (matchOR != null) {
            // search here
            results = searchWithOr(query, matchOR, searchWithOr, results)
        }

        await searchWithSynonyms(query, results).then(
            (value) => (results = value)
        )

        responseData.status = 1
        responseData.message = 'success'
        responseData.match = results
        // Search all files with results array

        res.json(responseData)
    } else {
        responseData.message = 'search string not provided.'
        res.json(responseData)
    }
})

app.get('/getSentences', (req, res) => {
    const sentences = []
    const responseData = {
        status: 0,
        message: '',
        sentenceCount: 0,
        sentences: sentences,
    }

    if (req.query.search !== undefined) {
        // Check for POS Keywords
        const allQueries = []
        // Adjective Check
        var adjectiveSentenceVariations = searchWithAdjectives(req.query.search)

        /*fs.readdir(directoryPath, function (err, files) {
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }

      files.forEach(function (file) {
        const allFileContents = fs.readFileSync(
          "resources/documents/" + file,
          "utf-8"
        );

        const _sentences = allFileContents.match(/[^\.!\?]+[\.!\?]+/g);

        _sentences.forEach(function (sentence) {
          // Look for fuller sentences (more than 2 words)
          if (sentence.split(" ").length > 2) {
            if (sentence.includes(req.query.search.toLowerCase())) {
              sentences.push(
                sentence.trim().replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, "")
              );
            }
          }
        });
      });

      responseData.status = 1;
      responseData.message = "success";
      responseData.sentenceCount = sentences.length;

      res.json(responseData);
    });*/
        res.json()
    } else {
        responseData.message = 'No phrase was provided.'
        res.json(responseData)
    }
})

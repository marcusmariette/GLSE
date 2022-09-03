require('dotenv').config()
const express = require("express");
const app = express();
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const wordnet = new natural.WordNet();
const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

app.listen(3001, () => {
    console.log("GLSE Backend Server Started on Port 3001...");
});

app.get('/', (req, res) => {
    res.send("Hello, world!");
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
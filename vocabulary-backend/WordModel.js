const mongoose = require('mongoose');


const wordslist = new mongoose.Schema({
    wordID: {
        type: String,
        unique: true
    },
    origin: {
        type: String
    },
    grammar: {
        type: String
    }
});

module.exports = Vocab = mongoose.model("vocab", wordslist);
const { Router } = require('express');
const WordController = require('./WordController');

const router = Router();


router.get("/", WordController.display_words);

module.exports = router;
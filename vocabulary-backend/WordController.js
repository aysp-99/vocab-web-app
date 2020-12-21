const fetch = require('node-fetch');
require('dotenv').config();

module.exports.display_words = async (req, res) => {
    try {
        const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/piecemeal?fields=definitions&strictMatch=false';
        
        const response = await fetch(baseUrl, {
            method: "GET", headers: {
                app_id: process.env.APP_ID,
                app_key: process.env.APP_KEY      
            }
        })
        const words = await response.json();
        console.log(words);
        const result = words.word;
        console.log(result);
        res.json(words);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}

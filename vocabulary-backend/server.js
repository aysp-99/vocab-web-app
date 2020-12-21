const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
require('dotenv').config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then((result) => app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`)))
    .catch((err) => console.log(err));

app.use("/", router);    
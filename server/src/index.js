const express = require('express');
const cors = require('cors');
const { isEmpty } = require('lodash');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
const port = 5000;
const url = process.env.MONGODB_URI;

const connectDatabase = async (req, res, next) => {
    try {
        const client = await MongoClient.connect(url);

        if (isEmpty(client)) {
            return res.send("Database not connected");
        }

        global.nativeClient = client;
        console.log("Database Connected");
        next();
    }
    catch (error) {
        return res.send("Database not connected");
    }
}

app.use(cors());
app.use(connectDatabase);

app.get('/:searchValue', async (req, res) => {
    const { searchValue } = req.params;
    const moviesCollection = nativeClient.db("training").collection("movies");
    const moviesData = await moviesCollection.find({Title:searchValue}).toArray();
    return res.send(moviesData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
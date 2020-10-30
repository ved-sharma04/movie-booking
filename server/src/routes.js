const express = require("express");
const Movie = require("./models/Movie");

const router = express.Router();

module.exports = function(){
    router.get('/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        const moviesData = await Movie.find({Title:searchValue});
        console.log(moviesData);
        return res.send(moviesData);
    });

    return router;
}
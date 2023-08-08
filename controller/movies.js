const { getMoviesBatch, getMoviesBatchSearch } = require("../dbqueries/movieQueries")

const getmovies = async (req, res) => {
    console.log("in get movies batch")
    const lastval = req.body.lastval
    res.json({
        "movies": await getMoviesBatch(lastval)
    })
}

const getmoviesSearch = async (req, res) => {
    console.log("in get movies batch")
    const lastval = req.body.lastval
    const str = req.body.str
    res.json({
        "movies": await getMoviesBatchSearch(lastval, str)
    })
}


module.exports = { getmovies, getmoviesSearch }
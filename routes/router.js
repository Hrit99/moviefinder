const express = require('express')
const { signup, signInWithToken, signInWithoutToken } = require('../controller/auth')
const { getmovies, getmoviesSearch } = require('../controller/movies')
const { createPlaylist, addMovie, getPlaylists, getPublicPlaylists } = require('../controller/playlist')
const router = express.Router()


router.get('/', (req, res)=> {
    res.send("Bakcend working!!")
})
router.post("/signup", signup)
router.post("/signintoken", signInWithToken)
router.post("/signin", signInWithoutToken)

router.post("/getmovies", getmovies)
router.post("/getmoviesSearch", getmoviesSearch)

router.post("/createPlaylist", createPlaylist)
router.post("/addMovie", addMovie)

router.post("/getPlaylists", getPlaylists)
router.get("/getPublicPlaylists", getPublicPlaylists)

module.exports = router
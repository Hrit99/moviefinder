const { createPlaylistQuery, addMovieQuery, getPlaylistsQuery, getPublicPlaylistsQuery } = require("../dbqueries/playlistQueries")
const { decodeJWT } = require("../utilities/jwt")

const createPlaylist = async (req, res) => {
    console.log("in create playlist")
  const access = req.body.access
  const name = req.body.name
  const decoded= decodeJWT(req.body.owner)
  let createdPlaylist = null
  createdPlaylist = await createPlaylistQuery(name, decoded.email, access)
 if( createdPlaylist != null){
    res.json({
        "success": true,
        "playlist": createdPlaylist
    })
 }
 else{
    res.json({
        "success": false,
    })
 }
}

const addMovie = async (req, res) => {
    console.log("adding to playlist")
    let id = req.body.id
    let names = req.body.names
    let updatedPlaylist = await addMovieQuery(names, id)
    if( updatedPlaylist != null){
        res.json({
            "success": true,
            "playlist": updatedPlaylist
        })
     }
     else{
        res.json({
            "success": false,
        })
     }
}

const getPlaylists = async (req, res)=> {
    const decoded= decodeJWT(req.body.token)
    console.log(req.body.token);
    const playlists = await getPlaylistsQuery(decoded.email)
    if( playlists != null){
        res.json({
            "success": true,
            "playlists": playlists
        })
     }
     else{
        res.json({
            "success": false,
        })
     }
}

const getPublicPlaylists = async (req, res)=> {
    const playlists = await getPublicPlaylistsQuery()
    if( playlists != null){
        res.json({
            "success": true,
            "playlists": playlists
        })
     }
     else{
        res.json({
            "success": false,
        })
     }
}

module.exports = { createPlaylist, addMovie, getPlaylists,getPublicPlaylists }
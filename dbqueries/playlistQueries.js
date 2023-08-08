
const { Playlist } = require("../models/playlist")

const createPlaylistQuery = async (name, owner, access) => {
    console.log(access)
    let newPlaylist = new Playlist( {
       name, owner, access
    })
    try {
        await newPlaylist.save()
    } catch (error) {
        return null
    }
    console.log(newPlaylist);
    return newPlaylist

}

const addMovieQuery = async (names, id )=> {
    try{
        names.forEach( (playlist) => {
            console.log(playlist);
            Playlist.find({name: playlist}).updateOne(
                { $addToSet: { movies: id } }
            ).then(data=>{
                console.log(data);
            })
        });

    const updatedPlaylists = await Playlist.find({
        movies: id
    }).populate({
        path: "movies",
      });
      return updatedPlaylists
    }
    catch{
        return null
    }
}

const getPlaylistsQuery = async (email)=> {
    try{
        const playlists = await Playlist.find({owner: email}).populate({
            path: "movies",
          });
      return playlists
    }
    catch{
        return null
    }
}
const getPublicPlaylistsQuery = async ()=> {
    try{
        const playlists = await Playlist.find({access: "public"}).populate({
            path: "movies",
          });
      return playlists
    }
    catch{
        return null
    }
}

module.exports = { createPlaylistQuery, addMovieQuery, getPlaylistsQuery, getPublicPlaylistsQuery }
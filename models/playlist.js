const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    index: { unique: true }
  },
 owner: {
    type: String,
 },
 access: {
    type: String,
  },
 movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});

let Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = {Playlist}
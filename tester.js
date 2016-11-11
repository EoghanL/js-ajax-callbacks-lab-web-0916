const Store = {
  artists: [],
  songs: []
}
const Artist = (function(){
  let id = 0
  return class Artist{
    constructor(name, popularity){
      this.id = ++id
      this.name = name
      this.popularity = popularity
      Store.artists = [...Store.artists, this]
    }
    getSongs(){
      this.songs = Store.songs.filter(function(song){
        return song.artist === this;
      })
    }
  }
})()
const Song = (function(){
  let id = 0
  return class Song{
    constructor(name, artist){
      this.id = ++id
      this.name = name
      this.artist = artist
      Store.songs = [...Store.songs, this]
    }
  }
})()
function getSongs(artist){
  Store.songs.filter(function(song){
    return song.artist === artist
  })
}

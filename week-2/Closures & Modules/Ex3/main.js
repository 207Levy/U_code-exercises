const SongsManager = function () {
  let songs = {};

  const addSong = (song, url) => {
    songs[song] = url.split("=")[1];
    console.log(songs[song]);
  };
  const getSong = (song) => "https://www.youtube.com/watch?v=" + songs[song];

  return {
    addSong,
    getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax"));

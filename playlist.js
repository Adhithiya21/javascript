// let song = ["song1", "song2", "song3", "song4", "song5"];

// song.push("song6");
// console.log("Array after adding 'song6':", song);

// console.log("Length of the playlist:", song.length);

// console.log("first and last  element:", song[0],song[song.length-1]);

// let dashedsong = song.join(",");
// console.log("Combined string with commas:", dashedsong);

// let songString = song.join();
// console.log("Array as a single string:", songString);
// Initialize a Playlist
let playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];

console.log("Initial Playlist:", playlist);


playlist.push("Song F");
console.log("After Adding a New Song:", playlist);


playlist.splice(2, 1); 
console.log("After Removing a Song:", playlist);

let playlistLength = playlist.length;
console.log("Playlist Length:", playlistLength);

let firstSong = playlist[0];
let lastSong = playlist[playlist.length - 1];
console.log("First Song:", firstSong);
console.log("Last Song:", lastSong);

let songString = playlist.join(", ");
console.log("Playlist as a String:", songString);

let newSongs = ["Song G", "Song H", "Song I"];
let combinedPlaylist = playlist.concat(newSongs);
console.log("Combined Playlist:", combinedPlaylist);

let nestedPlaylist = [["Song J", "Song K"], ["Song L", "Song M"], "Song N"];
let flattenedPlaylist = nestedPlaylist.flat();
console.log("Flattened Playlist:", flattenedPlaylist);

playlist.splice(2, 2, "Song X", "Song Y");
console.log("After Replacing Songs:", playlist);

playlist.sort();
console.log("Sorted Playlist:", playlist);

let firstTwoSongs = playlist.slice(0, 2); 
console.log("After Copying First 2 Songs to the End:", playlist);
/*
Input:

userSongs = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.

*/

const favoriteGenre = (users, genres) =>{

  const output = {};
  const songToGenre = {};

  for(const genre in genres){
    for(const song of genres[genre]){
      songToGenre[song] = genre
    }
  }

  for (const user in users){
    output[user] = [];

    let songs = users[user];
    let storage ={};
    let max = 0;

    for(let song of songs){
      let genre = songToGenre[song];
      if(!storage[genre]) {
        storage[genre] = 0;
      }
      storage[genre]++;
      max = Math.max(max, storage[genre])
    }
    console.log(max)

    for(let genre of Object.keys(storage)){
      if(storage[genre] === max){
        output[user].push(genre)
      }
    }

  }

  return output;



}





const userSongs = {  
  "David": ["song1", "song2", "song3", "song4", "song8"],
  "Emma":  ["song5", "song6", "song7"]
}

const songGenres = {  
  "Rock":    ["song1", "song3"],
  "Dubstep": ["song7"],
  "Techno":  ["song2", "song4"],
  "Pop":     ["song5", "song6"],
  "Jazz":    ["song8", "song9"]
}

console.log(favoriteGenre(userSongs, songGenres))
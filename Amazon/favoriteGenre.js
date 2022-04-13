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

  let output = {};
  let songToGenre = {};

  for (const genre in genres){
    const songs  = genres[genre];
    for(const song of songs){
      songToGenre[song] = genre;
    }
  }

  for(const user in users){
    const songs = users[user];

    const count = {};
    let max = 0;
    output[user] = [];

    for(const song of songs){
      const genre = songToGenre[song];
      if(!count[genre]){
        count[genre] = 0;
      }
      count[genre]++;
      max = Math.max(max, count[genre])
    }

    for(const genre in count){
      if(count[genre] === max){
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
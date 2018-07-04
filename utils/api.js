import { setCinemaMovies } from "../cinemas";

const KEY = 'b67471582f2df3e1c92bc8d4ed64add9';
const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`


export function fetchNowPlaying(){
  return fetch(NOW_PLAYING)
    .then(response => response.json())
    .then(responseJson => setCinemaMovies(responseJson))
}


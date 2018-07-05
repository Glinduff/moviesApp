const cinemas = [
  {
    name: 'Alto Las Condes',
    id: 1,
    moviesId: [351286, 260513, 427641, 447332, 400535, 383498, 460019, 348350, 402900, 437557],
  },
  {
    name: 'Portal Ñuñoa',
    id: 2,
    moviesId: [351286, 401981, 493922, 476299, 400535, 383498, 460019, 348350, 402900, 437557],
  },
  {
    name: 'Mall Plaza Vespucio',
    id: 3,
    moviesId: [440471, 447332, 449176, 383498, 460019, 348350, 402900, 437557],
  }
]

export function setCinemas({results}){
  return Promise.all(setMoviesToCinema(results))
  .then(resp => console.log(resp) || resp)
}



function setMoviesToCinema(movies){
  return cinemas.map((cinema) => {
    return{
      ...cinema,
      movies: cinema.moviesId.map(id => addMovie(id, movies, cinema)) 
    }
  })
}

function addMovie(id, movies, cinema){
  for (let j = 0; j < movies.length; j++) {
    const movie = movies[j];
    if(id === movie.id) {
      return {
        ...movie,
        cinema: cinema
      }
    }
  }
}

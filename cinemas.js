const cinemas = [
  {
    name: 'Alto Las Condes',
    id: 1,
    moviesId: [351286, 260513, 427641, 447332, 400535, 383498, 460019, 348350, 402900, 437557]
  },
  {
    name: 'Portal Ñuñoa',
    id: 1,
    moviesId: [351286, 401981, 493922, 476299, 400535, 383498, 460019, 348350, 402900, 437557]
  },
  {
    name: 'Mall Plaza Vespucio',
    id: 1,
    moviesId: [440471, 447332, 449176, 383498, 460019, 348350, 402900, 437557]
  }
]

export function setCinemaMovies(movies){
  return Promise.all(setMoviesToCinema(movies))
  .then(results => results)
}


function setMoviesToCinema(movies){
  return cinemas.map(cinema => {
    return {
      ...cinema,
      movies : movies
    }
   })
}

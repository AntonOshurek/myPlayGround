import { Movie } from './movie';

const apiAdapter = (filmsArray) => {
  return filmsArray.map((film) => {
    return {
      title: film.Title,
      year: film.Year,
      id: film.imdbID,
      poster: film.Poster,
      type: film.Type,
    }
  })
}

function MovieList(props) {
  const { movies } = props;

  const transformingMovies = apiAdapter(movies);

  return(
    <ul className='movieList browser-default'>
      {transformingMovies.map((movie) => {
        return <Movie key={movie.id} {...movie}/>
      })}
    </ul>
  )
};

export { MovieList };

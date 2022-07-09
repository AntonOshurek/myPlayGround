import { useState, useEffect } from 'react';

import { MovieList } from '../components/movie-list';
import { Preloader } from '../components/preloader';

function Main() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=3179f694&s=matrix')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <main className='main'>
        <Preloader />
      </main>
    );
  } else {
    return (
      <main className='main'>
        <MovieList movies={movies.Search}/>
      </main>
    );
  }
}

export { Main }

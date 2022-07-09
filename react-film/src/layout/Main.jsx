import { useState, useEffect } from 'react';

import { MovieList } from '../components/movie-list';

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
    return <div>Загрузка...</div>;
  } else {
    return (
      <MovieList movies={movies.Search}/>
    );
  }

  // return(
  //   <main className="main container">
  //     {
  //       movies.length ? <MovieList movies={movies}/> : <span>Loading...</span>
  //     }
  //   </main>
  // )
}

export { Main }

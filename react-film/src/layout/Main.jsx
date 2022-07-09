import { useState, useEffect } from 'react';

import { MovieList } from '../components/movie-list';
import { Preloader } from '../components/preloader';
import { Search } from '../components/search';
import { Filter } from '../components/filter';

const apiLink = 'http://www.omdbapi.com/?apikey=3179f694&s=';
const apiBasicSearch = 'matrix'

function Main() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const search = (searchKey) => {
    fetch(`${apiLink}${searchKey}`)
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
  }

  useEffect(() => {
    search(apiBasicSearch);
  }, []);

  const newSearch = (name) => {
    console.log(name);
    search(name);
  }

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
        <Search newSearch={newSearch}/>
        <Filter />
        <MovieList movies={movies.Search}/>
      </main>
    );
  }
}

export { Main }

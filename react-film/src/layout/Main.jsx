import { useState, useEffect } from 'react';

import { MovieList } from '../components/movie-list';
import { Preloader } from '../components/preloader';
import { Search } from '../components/search';
import { Filter } from '../components/filter';

import { FILTER_TYPES, API_LINK } from '../utils/consts';

function Main() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchText, setSearchText] = useState('matrix');
  const [filterType, setFilterType] = useState(FILTER_TYPES.ALL);

  const search = () => {
    fetch(`${API_LINK}${searchText}&type=${filterType === FILTER_TYPES.ALL ? '' : filterType}`)
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
    search();
  }, []);

  useEffect(() => {
    search();
  }, [searchText]);

  useEffect(() => {
    search();
  }, [filterType]);

  const setNewSearch = (name) => {
    setSearchText(name);
  };

  const setNewFilter = (filterName) => {
    setFilterType(filterName);
  };

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
        <Search setNewSearch={setNewSearch}/>
        <Filter setNewFilter={setNewFilter}/>
        <MovieList movies={movies.Search}/>
      </main>
    );
  }
}

export { Main }

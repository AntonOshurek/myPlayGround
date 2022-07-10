import { useState, useEffect } from 'react';

import { MovieList } from '../components/movie-list';
import { Preloader } from '../components/preloader';
import { Search } from '../components/search';
import { Filter } from '../components/filter';

import { api } from '../api/api';

import { FILTER_TYPES, API_LINK } from '../utils/consts';

function Main() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchParams, setSearchParams] = useState({
    search: 'matrix',
    filter: '',
  });

  const getData = () => {
    api(searchParams.search, searchParams.filter).then((result) => {
      if(result) {
        setIsLoaded(true);
        setMovies(result);
      }
    }).catch((err) => {
      setIsLoaded(true);
      setError(error);
      console.log(`ошибка сервера - ${err}`);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [searchParams]);

  const setNewSearch = (searchName) => {
    setSearchParams(() => ({...searchParams, search: searchName}));
  };

  const setNewFilter = (filterName) => {
    setSearchParams(() => ({...searchParams, filter: filterName}));
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

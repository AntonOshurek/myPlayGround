import { useState, useEffect } from 'react';

import { MovieList } from '../components/movie-list';
import { Preloader } from '../components/preloader';
import { Search } from '../components/search';
import { Filter } from '../components/filter';

import { api } from '../api/api';

function Main() {
  const [movies, setMovies] = useState([]);
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
    }).catch((error) => {
      console.error(error);
      setIsLoaded(true);
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

  return (
    <main className='main'>
      <Search setNewSearch={setNewSearch}/>
      <Filter setNewFilter={setNewFilter}/>
      {!isLoaded ? <Preloader /> : <MovieList movies={movies.Search}/>}
    </main>
  );

}

export { Main }

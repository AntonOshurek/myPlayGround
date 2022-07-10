const FILTER_TYPES = {
  ALL: 'all',
  MOVIE: 'movie',
  SERIES: 'series',
};

const API_KEY = process.env.REACT_APP_API_KEY;

const API_LINK = `http://www.omdbapi.com/?apikey=${API_KEY}=`;

export { FILTER_TYPES, API_LINK };

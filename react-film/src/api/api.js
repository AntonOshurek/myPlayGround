import { FILTER_TYPES, API_LINK } from '../utils/consts';

const api = ( searchParam, filterName) =>
  fetch(`${API_LINK}${searchParam}&type=${filterName === FILTER_TYPES.ALL ? '' : filterName}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });

export { api };

import { useState, useEffect } from 'react';
import { FILTER_TYPES } from '../utils/consts';

function Filter(props) {
  const {setNewFilter} = props;

  const [filterType, setFilterType] = useState(FILTER_TYPES.ALL);

  useEffect(() => {
    setNewFilter(filterType)
  }, [filterType])

  const handleFilter = (evt) => {
    setFilterType(evt.target.dataset.type)
  };

  return(
    <form className="filter" onChange={handleFilter}>
      <p>
        <label>
          <input name="type" type="radio" data-type={FILTER_TYPES.ALL}/>
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input name="type" type="radio" data-type={FILTER_TYPES.MOVIE}/>
          <span>Movies only</span>
        </label>
      </p>
      <p>
        <label>
          <input name="type" type="radio"  data-type={FILTER_TYPES.SERIES}/>
          <span>Series only</span>
        </label>
      </p>
    </form>
  );
}

export { Filter }

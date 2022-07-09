import { useState } from 'react';

function Search(props) {
  const { newSearch } = props;

  const [search, setSearch] = useState('');

  const onSearchChange = (evt) => {
    setSearch(evt.target.value)
  }

  const handleSearchKey = (evt) => {
    if(evt.key === 'Enter') {
      newSearch(search);
    }
  }

  return(
    <div className="search">
      <input id="email_inline" type="text" className="validate search__input" placeholder="Search" value={search} onChange={onSearchChange} onKeyDown={handleSearchKey}/>
      <button className='search__button' type='button' onClick={() => newSearch(search)}>search</button>
    </div>
  )
}

export { Search };

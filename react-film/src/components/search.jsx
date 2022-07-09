import { useEffect, useState } from 'react';

function Search() {

  const [search, setSearch] = useState('');

  const onSearchChange = (evt) => {
    setSearch(evt.target.value)
  }

  return(
    <div className="search">
      <input id="email_inline" type="text" className="validate search__input" placeholder="Search" value={search} onChange={onSearchChange}/>
      <button className='search__button' type='button'>search</button>
    </div>
  )
}

export { Search };

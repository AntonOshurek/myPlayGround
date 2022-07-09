function Movie(props) {
  const {title, year, id, type, poster} = props;

  return(
    <li className="movie-card" id={id}>
      <img className="movie-card__image" src={poster} />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__year">{year}</p>
        <p className="movie-card__type">{type}</p>
      </div>
    </li>
  );
};

export { Movie };

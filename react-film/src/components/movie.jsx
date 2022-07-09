function Movie(props) {
  const {title, year, id, type, poster} = props;

  return(
    <li className="card movie" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator movie__image" src={poster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </li>
  );
};

export { Movie };

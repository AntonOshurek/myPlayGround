import './header.css';

export const Header = () => {

  return(
    <header className='header'>
      <nav>
        <div className="nav-wrapper navigation container">
          <a href="#!" className="brand-logo"><i className="material-icons">shop</i>React shop</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

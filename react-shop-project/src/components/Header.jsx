import './header.css';

export const Header = () => {

  return(
    <header className='header'>
      <nav>
        <div class="nav-wrapper navigation container">
          <a href="#!" class="brand-logo"><i class="material-icons">shop</i>React shop</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html"><i class="material-icons">search</i></a></li>
            <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

import './footer.css';

export const Footer = () => {

  return(
    <footer className="page-footer footer">
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
    </footer>
  );

};

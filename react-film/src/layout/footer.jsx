function Footer() {
  return(
    <footer className="page-footer #607d8b blue-grey">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">GitHub Links</a>
        </div>
      </div>
    </footer>
  )
}

export { Footer };

function Preloader() {
  return(
    <div className="preloader">
      <p>loading...</p>
      <div className="progress preloader__progress">
        <div className="indeterminate"></div>
      </div>
    </div>

  )
}

export { Preloader };

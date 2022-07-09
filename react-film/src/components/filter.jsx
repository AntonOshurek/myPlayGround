function Filter() {
  return(
    <form className="filter">
      <p>
        <label>
          <input name="group1" type="radio" />
          <span>Red</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" />
          <span>Yellow</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio"  />
          <span>Green</span>
        </label>
      </p>
    </form>
  );
}

export { Filter }

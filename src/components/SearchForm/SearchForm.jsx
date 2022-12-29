const SearchForm = () => {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__content">
          <input className="search__input" placeholder="Фильм" type="text" />
          <button className="search__start"></button>
        </div>
        <div className="search__short">
          <p className="search__text">Короткометражки</p>
          <label className="switch">
            <input className="search__checkbox" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
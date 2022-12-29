import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

const Movies = ({ films, loading, setMoreFilm, moreFilm }) => {
  const newFilms = films.slice(0, moreFilm);
  return (
    <>
      <section className="movies">
        <SearchForm />
        {loading ? <Preloader /> :
          <>
            <div className="movies__container">
              {newFilms.map((card) => {
                return <MoviesCard key={card.id} card={card} />
              })}
            </div>
            {films.length < moreFilm ? '' : < button className="movies__more" onClick={() => { setMoreFilm(moreFilm + 8) }} type="button">Еще</button>}
          </>
        }
        {/*  <div className="movies__container">
          {newFilms.map((card) => {
            return <MoviesCard key={card.id} card={card} />
          })}
        </div>
        {films.length < moreFilm ? '' : < button className="movies__more" onClick={() => { setMoreFilm(moreFilm + 8) }} type="button">Еще</button>} */}
      </section>
    </>
  );
}

export default Movies;
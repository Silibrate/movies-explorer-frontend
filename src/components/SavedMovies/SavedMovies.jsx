import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({ films }) => {
  return (
    <section className="savedMovies">
      <SearchForm />
      <div className="savedMovies__container">
        {films.map((card) => {
          if (card.like) {
            return <MoviesCard key={card.id} card={card} />
          }
          return false;
        })}
      </div>
    </section>
  );
}

export default SavedMovies;
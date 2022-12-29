/* eslint-disable array-callback-return */
import MoviesCard from "../MoviesCard/MoviesCard";

const SavedMovies = ({ films }) => {
  return (
    <section className="savedMovies">
      <div className="savedMovies__container">
        {films.map((card) => {
          if (card.like) {
            return <MoviesCard key={card.id} card={card} />
          }
        })}
      </div>
    </section>
  );
}

export default SavedMovies;
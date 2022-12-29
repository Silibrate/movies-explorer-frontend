const MoviesCard = ({ card }) => {

  return (
    <div className="card">
      <img className="card__img" src={card.link} alt="screenshot" />
      <div className="card__container">
        <h2 className="card__title">{card.name}</h2>
        <button className={`card__like ${card.like ? 'card__like_on' : ''}`} type="button"></button>
      </div>
      <div className="card__time">
        <p className="card__text">{card.time}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
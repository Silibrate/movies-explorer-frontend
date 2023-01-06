import promoImg from '../../images/promoImg.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__sibtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="promo__button">Узнать больше</button>
          
        </div>
        <img className='promo__img' src={promoImg} alt="World" />
      </div>
    </section>
  );
}

export default Promo;
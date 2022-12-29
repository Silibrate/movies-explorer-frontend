import { useState } from "react";

const Portfolio = () => {
  const [staticOpen, setStaticOpen] = useState(false);
  const [adaptivOpen, setAdaptivOpen] = useState(false);
  const [singlepage, setSinglepageOpen] = useState(false);
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <p className="portfolio__subtitle">Портфолио</p>
        <div className="portfolio__info">
          <div className="portfolio__item">
            <p onClick={() => { staticOpen ? setStaticOpen(false) : setStaticOpen(true) }} className="portfolio__title">Статичный сайт <span className={`portfolio__arrow ${staticOpen ? 'portfolio__arrow_open' : ""}`}>&rarr;</span></p>
            <ul className={`portfolio__lists ${staticOpen ? 'portfolio__static_open' : ''}`}>
              <li className="static__link">asdasdasd</li>
              <li className="static__link">asdasd</li>
              <li className="static__link">asdasdasdad</li>
            </ul>
          </div>

          <div className="portfolio__item">
            <p onClick={() => { adaptivOpen ? setAdaptivOpen(false) : setAdaptivOpen(true) }} className="portfolio__title">Адаптивный сайт <span className={`portfolio__arrow ${adaptivOpen ? 'portfolio__arrow_open' : ""}`}>&rarr;</span></p>
            <ul className={`portfolio__lists ${adaptivOpen ? 'portfolio__static_open' : ''}`}>
              <li className="static__link">asdasdasd</li>
              <li className="static__link">asdasd</li>
              <li className="static__link">asdasdasdad</li>
            </ul>
          </div>

          <div className="portfolio__item">
            <p onClick={() => { singlepage ? setSinglepageOpen(false) : setSinglepageOpen(true) }} className="portfolio__title">Одностраничное приложение <span className={`portfolio__arrow ${singlepage ? 'portfolio__arrow_open' : ""}`}>&rarr;</span></p>
            <ul className={`portfolio__lists ${singlepage ? 'portfolio__static_open' : ''}`}>
              <li className="static__link">asdasdasd</li>
              <li className="static__link">asdasd</li>
              <li className="static__link">asdasdasdad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
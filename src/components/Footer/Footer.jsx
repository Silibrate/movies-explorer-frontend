const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__content">
          <p className="footer__date">&#169;2022</p>
          <div className="footer__nav">
            <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
            <a href="https://github.com/Silibrate" className="footer__link">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
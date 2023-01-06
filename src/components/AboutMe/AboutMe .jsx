import tiredImg from '../../images/tired.webp'

const AboutMe = () => {
  return (
    <section className="aboutMe" id='student'>
      <div className="aboutMe__container">
        <h3 className="aboutMe__subtitle">
          Студент
        </h3>
        <div className="aboutMe__content">
          <div className="aboutMe__block">
            <h2 className="aboutMe__title"> $iLib℟a†e$</h2>
            <p className="aboutMe__info">Фронтенд-разработчик, 23 года</p>
            <p className="aboutMe__text">Я родился в Гусе-Хрустальном и живу в Москве, Закончил факультет робото-технике. У меня есть жена!!!!
              Я люблю слушать hip-hop, а ещё увлекаюсь FPS играми. Недавно начал кодить. С 2021 года работал в компании «Склад». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className="aboutMe__link" href="https://github.com/Silibrate">Github</a>
          </div>
          <img className='aboutMe__img' src={tiredImg} alt="Это я" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
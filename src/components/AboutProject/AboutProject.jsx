const AboutProject = () => {
  return (
    <section className="aboutProject" id="about">
      <div className="aboutProject__container">
        <h2 className="aboutProject__title">О проекте</h2>
        <div className="aboutProject__content">
          <div className="aboutProject__item">
            <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="aboutProject__item">
            <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="aboutProject__terms">
          <p className="aboutProject__week">1 неделя</p>
          <p className="aboutProject__weeks">4 недели</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
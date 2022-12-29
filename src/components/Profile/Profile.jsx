const Profile = ({ setIsLogin }) => {
  return (
    <section className="profile">
      <h2 className="profile__title">
        Привет, Silibrate!
      </h2>
      <form className="profile__form">
        <div className="profile__info profile__info_name">
          <p className="profile__text">Имя</p>
          <input className="profile__input" placeholder="Silibtare" type="text" />
        </div>
        <div className="profile__info">
          <p className="profile__text">E-mail</p>
          <input className="profile__input" placeholder="pochta@yandex.ru" type="email" />
        </div>
        <button className="profile__save">Редактировать</button>
      </form>
      <button onClick={() => setIsLogin(false)} className="profile__exit">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
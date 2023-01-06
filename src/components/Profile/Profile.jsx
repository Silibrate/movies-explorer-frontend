import { Link, NavLink } from "react-router-dom";
import headerLogo from '../../images/headerLogo.svg';
import burger from '../../images/burger.svg';
import profileImg from '../../images/profileImg.svg';
import Header from "../Header/Header";

const Profile = ({ setIsLogin, setOpenNav }) => {
  return (
    <>
      <Header
        headerClass={'header_white'}
      >
        <div className='header__container '>
          <Link to='/'><img className='header__logo' src={headerLogo} alt="Logo" /></Link>
          <>
            <img onClick={() => { setOpenNav(true) }} className={`header__burger`} src={burger} alt="menu" />
            <nav className={`header__nav`}>
              <NavLink className={`header__nav__link `} to='/movies'>Фильмы</NavLink>
              <NavLink className={`header__nav__link `} to='/saved-movies'>Сохранённые фильмы</NavLink>
              <NavLink className={`header__nav__link`} to='/profile'>Аккаунт <img className="header__icon" src={profileImg} alt="Profile" /></NavLink>
            </nav>
          </>
        </div>
      </Header>
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
        <Link to="/">
          <button onClick={() => { setIsLogin(false) }} className="profile__exit">Выйти из аккаунта</button>
        </Link>
      </section>
    </>
  );
}

export default Profile;
import { Link, NavLink } from "react-router-dom";
import headerLogo from '../../images/headerLogo.svg';
import burger from '../../images/burger.svg';
import profileImg from '../../images/profileImg.svg';

const Header = ({ isLogin, setOpenNav }) => {

  return (
    <header className={`header ${isLogin ? 'header_open' : ''}`}>
      <div className='header__container'>
        <Link to='/'><img className='header__logo' src={headerLogo} alt="Logo" /></Link>
        {isLogin
          ?
          <>
            <img onClick={() => { setOpenNav(true) }} className={`header__burger`} src={burger} alt="menu" />
            <nav className={`header__nav`}>
              <NavLink className={`header__nav__link `} to='/movies'>Фильмы</NavLink>
              <NavLink className={`header__nav__link `} to='/saved-movies'>Сохранённые фильмы</NavLink>
              <NavLink className={`header__nav__link`} to='/profile'>Аккаунт <img className="header__icon" src={profileImg} alt="Profile" /></NavLink>
            </nav>
          </>
          :
          <div className='header__content'>
            <Link className='header__link header__signup' to="/signup">Регистрация</Link>
            <Link className='header__link' to="/signin">Войти</Link>
          </div>
        }

      </div>
    </header >
  );
}

export default Header;
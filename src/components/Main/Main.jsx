import { Link, NavLink } from "react-router-dom";
import headerLogo from '../../images/headerLogo.svg';
import Promo from '../Promo/Promo'
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe ";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import burger from '../../images/burger.svg';
import profileImg from '../../images/profileImg.svg';

const Main = ({ isLogin, setOpenNav }) => {
  return (
    <>
      <Header>
        <div className='header__container'>
          <Link to='/'><img className='header__logo' src={headerLogo} alt="Logo" /></Link>
          {isLogin
            ?
            <>
              <img onClick={() => { setOpenNav(true) }} className={`header__burger`} src={burger} alt="menu" />
              <nav className={`header__nav`}>
                <NavLink className={`header__nav__link ${isLogin ? 'header__nav__link_white' : ''}`} to='/movies'>Фильмы</NavLink>
                <NavLink className={`header__nav__link ${isLogin ? 'header__nav__link_white' : ''}`} to='/saved-movies'>Сохранённые фильмы</NavLink>
                <NavLink className={`header__nav__link ${isLogin ? 'header__nav__link_white' : ''}`} to='/profile'>Аккаунт <img className="header__icon" src={profileImg} alt="Profile" /></NavLink>
              </nav>
            </>
            :
            <div className='header__content'>
              <Link className='header__link header__signup' to="/signup">Регистрация</Link>
              <Link className='header__link' to="/signin">Войти</Link>
            </div>
          }

        </div>
      </Header>
      <div className='main'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}

export default Main;
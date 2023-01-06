import { Link, NavLink } from "react-router-dom";
import headerLogo from '../../images/headerLogo.svg';
import burger from '../../images/burger.svg';
import profileImg from '../../images/profileImg.svg';
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({ films, setOpenNav }) => {
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
      <section className="savedMovies">
        <SearchForm />
        <div className="savedMovies__container">
          {films.map((card) => {
            if (card.like) {
              return <MoviesCard key={card.id} card={card} />
            }
            return false;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
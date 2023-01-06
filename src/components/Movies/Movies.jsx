import { Link, NavLink } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import burger from '../../images/burger.svg';
import profileImg from '../../images/profileImg.svg';
import headerLogo from '../../images/headerLogo.svg';

const Movies = ({ films, loading, setMoreFilm, moreFilm, setOpenNav }) => {
  const newFilms = films.slice(0, moreFilm);
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
      <section className="movies">
        <SearchForm />
        {loading ? <Preloader /> :
          <>
            <div className="movies__container">
              {newFilms.map((card) => {
                return <MoviesCard key={card.id} card={card} />
              })}
            </div>
            {films.length < moreFilm ? '' : < button className="movies__more" onClick={() => { setMoreFilm(moreFilm + 3) }} type="button">Еще</button>}
          </>
        }
      </section>
      <Footer />
    </>
  );
}

export default Movies;
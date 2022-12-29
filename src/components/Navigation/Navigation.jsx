import { NavLink } from "react-router-dom";
import closeImg from '../../images/close.svg';

const Navigation = ({ setOpenNav, openNAv }) => {

  return (
    <div onClick={() => setOpenNav(false)} className={`navigation ${openNAv ? 'navigation_open' : ''}`}>
      <div onClick={(e) => e.stopPropagation()} className="navigation__conteiner">
        <img onClick={()=>setOpenNav(false)} className="navigation__close" src={closeImg} alt="Закрыть" />
        <nav className="navigation__nav">
          <NavLink className={`navigation__link `} to='/'>Главная</NavLink>
          <NavLink className={`navigation__link `} to='/movies'>Фильмы</NavLink>
          <NavLink className={`navigation__link `} to='/saved-movies'>Сохранённые фильмы</NavLink>
          <NavLink className={`navigation__link`} to='/profile'>Аккаунт </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
import { Link } from 'react-router-dom';
import headerLogo from '../../images/headerLogo.svg';

const Login = ({ setIsLogin }) => {
  return (
    <section className="login">
      <div className="login__container">
        <Link to='/'><img className='login__logo' src={headerLogo} alt="Logo" /></Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <p className="login__form__text">E-mail</p>
          <input placeholder='E-mail' className="login__input" type="email" />
          <p className="login__form__text">Пароль</p>
          <input minLength={8} placeholder='Пароль' className="login__input" type="password" />
          <Link to="/movies">
            <button onClick={() => { setIsLogin(true) }} className="login__button">Войти</button>
          </Link>
        </form>
        <p className="login__text">Ещё не зарегистрированы? <Link to='/signup' className="login__link">Регистрация</Link></p>
      </div>
    </section >
  );
}

export default Login;
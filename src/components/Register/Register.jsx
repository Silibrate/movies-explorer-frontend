import { Link } from 'react-router-dom';
import headerLogo from '../../images/headerLogo.svg';

const Register = () => {
  return (
    <>
      <section className="register">
        <div className="register__container">
          <Link to='/'><img className='register__logo' src={headerLogo} alt="Logo" /></Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form">
            <p className="form__text">Имя</p>
            <input minLength={2} placeholder='Имя' className="register__input" type="text" />
            <p className="form__text">E-mail</p>
            <input placeholder='E-mail' className="register__input" type="email" />
            <p className="form__text">Пароль</p>
            <input minLength={8} placeholder='Пароль' className="register__input" type="password" />
            <button className="register__button">Зарегистрироваться</button>
          </form>
          <p className="register__text">Уже зарегистрированы? <Link to='/signin' className="register__link">Войти</Link></p>
        </div>
      </section>
    </>
  );
}

export default Register;
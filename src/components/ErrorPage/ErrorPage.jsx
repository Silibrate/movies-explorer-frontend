import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error__page">
      <p className="error__page__code">404</p>
      <p className="error__page__text">Страница не найдена</p>
      <Link className="error__page__link" to='/'>Назад</Link>
    </div>
  );
}

export default ErrorPage;
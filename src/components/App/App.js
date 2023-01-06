import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import ErrorPage from "../ErrorPage/ErrorPage";

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [openNAv, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [moreFilm, setMoreFilm] = useState(12);
  const films = [
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '1', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: true, id: '2', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: true, id: '3', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '4', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '5', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '6', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '7', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '8', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '9', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '10', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '11', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '12', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '13', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '14', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '15', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '16', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '17', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '18', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '19', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '20', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '21', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '22', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '23', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '24', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '25', time: '1ч42м' },
    { name: 'Фильм', link: 'https://assets.gq.ru/photos/5d9f60b7ae00fb00090c29b0/master/w_1600%2Cc_limit/01.jpg', like: false, id: '26', time: '1ч42м' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes>

        <Route path="/" element={<Main
          isLogin={isLogin}
          setOpenNav={setOpenNav}
        />}></Route>

        <Route path="/signin" element={<Login
          setIsLogin={setIsLogin}
        />}></Route>

        <Route path="/signup" element={<Register />}></Route>

        <Route path="/movies" element={<Movies
          moreFilm={moreFilm}
          setMoreFilm={setMoreFilm}
          films={films}
          loading={loading}
          setOpenNav={setOpenNav}
        />}></Route>

        <Route path='/saved-movies' element={<SavedMovies
          films={films}
          setOpenNav={setOpenNav}
        />}></Route>

        <Route path="/profile" element={<Profile
          setIsLogin={setIsLogin}
          setOpenNav={setOpenNav}
        />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>

      </Routes>
      <Navigation
        openNAv={openNAv}
        setOpenNav={setOpenNav}
      />
    </>
  );
}

export default App;

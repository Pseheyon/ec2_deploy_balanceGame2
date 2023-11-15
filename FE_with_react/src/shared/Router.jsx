import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CardList from "../pages/CardList";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import { removeCookie, getCookie, setCookie } from "../cookie/cookie";

const Router = () => {
  const navigate = useNavigate();
  const cookierefreshToken = getCookie("refreshToken");
  const token = localStorage.getItem("localAccessToken");
  const userNickName = localStorage.getItem("localNickName");
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  const handleLogoutBtn = () => {
    removeCookie("refreshToken");
    localStorage.removeItem("localNickName");
    localStorage.removeItem("localAccessToken");
    setIsLoggedIn(false);
  };

  //가드;
  useEffect(() => {
    if (cookierefreshToken) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/games" element={<CardList />} />
          <Route path="/game/submit" element={<Edit />} />
          <Route path="/games/:gameId" element={<Detail />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

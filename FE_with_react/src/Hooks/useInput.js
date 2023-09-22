import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navi = useNavigate();
  const tokennickname = localStorage.getItem("token");

  console.log(tokennickname);

  return (
    <div>
      <h2>Home</h2>
      <button
        onClick={() => {
          localStorage.remove("token");
          navi("/");
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Home;

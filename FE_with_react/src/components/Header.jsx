import React from "react";
import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ButtonRe, ButtonStyleJoin, ButtonStyleLogin } from "./Button";
import { FlexRowSpaceBet } from "./Flex";
import { useEffect, useState } from "react";
import { removeCookie } from "../cookie/cookie";
import { logoutSuccess, loginSuccess } from "../redux/modules/login";

function Header() {
  const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localAccessToken = localStorage.getItem("accessToken");
  const localNickName = localStorage.getItem("localNickName");

  const accessToken = localStorage.getItem("accessToken");
  const resposeNickname = useSelector((state) => state.login.users[0].nickname);

  const [userLoggedIn, setUserLoggedIn] = useState(!!localNickName);

  const handleLogoutBtn = () => {
    localStorage.removeItem("localNickName");
    localStorage.removeItem("accessToken");
    removeCookie("refreshToken");
    removeCookie("refreshToken", { path: "/", domain: "localhost" });
    dispatch(logoutSuccess());
    setUserLoggedIn(false);
  };

  const activeStyle = {
    textShadow: "-1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white",
    color: "#ff4ab3",
    fontWeight: "900",
    fontSize: "16px",
  };

  const handleNavLinkClick = (event) => {
    if (!accessToken) {
      event.preventDefault();
      alert("로그인 후 이용해 주십시오");
    }
  };
  return (
    <StcenterWrapper>
      <StWidthWraprer>
        <FlexRowSpaceBet>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <StLogoMin
              src={`${BACKEND_SERVER}/balancegame/images/Logo.png`}
            ></StLogoMin>
          </NavLink>
        </FlexRowSpaceBet>
        <StButtonWrap>
          {userLoggedIn || !!resposeNickname ? (
            // {userLoggedIn ? (
            <>
              <NavLink
                to="/"
                className="NavLink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/games"
                className="NavLink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Games
              </NavLink>
              <NavLink
                to="/game/submit"
                className="NavLink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleNavLinkClick}
              >
                Create
              </NavLink>
              <StNic>{localNickName}</StNic>
              <ButtonRe onClick={handleLogoutBtn}>LOGOUT</ButtonRe>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className="NavLink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/games"
                className="NavLink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Games
              </NavLink>
              <NavLink
                to="/game/submit"
                className="NavLink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleNavLinkClick}
              >
                Create
              </NavLink>
              <ButtonStyleJoin
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Join
              </ButtonStyleJoin>
              <ButtonStyleLogin
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </ButtonStyleLogin>
            </>
          )}
        </StButtonWrap>
      </StWidthWraprer>
    </StcenterWrapper>
  );
}

export default Header;
const StWidthWraprer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0 2%;
  margin: 2vh auto;
  z-index: 10;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  font-size: 16px;
`;
const StLogoMin = styled.img`
  width: 200px;
  height: inherit;
  cursor: pointer;
`;
const StcenterWrapper = styled.div`
  width: 100%;

  justify-content: center;
`;
const StButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StNic = styled.div`
  color: gray;
  text-decoration: underline;
  font-weight: 700;
  font-size: 16px;
  padding: 8px 12px;
`;

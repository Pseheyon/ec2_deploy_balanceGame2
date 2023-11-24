import React from "react";
import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ButtonRe, ButtonStyleJoin, ButtonStyleLogin } from "./Button";
import { FlexCenter, FlexRow, FlexRowSpaceBet } from "./Flex";
import { useEffect, useState } from "react";
import { removeCookie, getCookie, setCookie } from "../cookie/cookie";
import { logoutSuccess, loginSuccess } from "../redux/modules/login";

function Header() {
  const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookierefreshToken = getCookie("refreshToken");
  const localAccessToken = localStorage.getItem("accessToken");
  const localNickName = localStorage.getItem("localNickName");
  const resposeNickname = useSelector((state) => state.login.users[0].nickname);

  useEffect(() => {
    if (resposeNickname) {
      localStorage.setItem("localNickName", resposeNickname);
      dispatch(loginSuccess({ nickname: resposeNickname }));
    }
  }, [dispatch, resposeNickname]);

  const handleLogoutBtn = () => {
    localStorage.removeItem("localNickName");
    localStorage.removeItem("localAccessToken");
    removeCookie("refreshToken");
    dispatch(logoutSuccess());
  };
  const activeStyle = {
    textShadow: "-1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white",
    color: "#ff4ab3",
    fontWeight: "900",
    fontSize: "24px",
  };
  //s-young01.tistory.com/39 [s._.young01:티스토리]
  출처: https: return (
    <StcenterWrapper>
      <StWidthWraprer>
        <FlexRowSpaceBet>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <StLogoMin
              src={`${BACKEND_SERVER}/react/images/Logo.png`}
            ></StLogoMin>
          </NavLink>
        </FlexRowSpaceBet>
        <StButtonWrap>
          {localAccessToken ? (
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
  padding: 0 3%;
  margin: 3vh auto;
  z-index: 10;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;
const StLogoMin = styled.img`
  width: 300px;
  height: inherit;
  position: absolute;
  top: 0;
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
  font-size: 22px;
  /* margin-left: 8px; */
  padding: 10px 15px;
`;

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ButtonRe, ButtonStyleJoin, ButtonStyleLogin } from "./Button";
import { FlexCenter, FlexRow } from "./Flex";
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

  return (
    <StcenterWrapper>
      <StWidthWraprer>
        <FlexRow>
          <StLogoMin
            src={`${BACKEND_SERVER}/react/images/Logo.png`}
            onClick={() => {
              navigate("/");
            }}
          ></StLogoMin>
          <StTapMenue></StTapMenue>
        </FlexRow>
        <StButtonWrap>
          {localAccessToken ? (
            <>
              <StNic>{localNickName}</StNic>
              <ButtonRe onClick={handleLogoutBtn}>LOGOUT</ButtonRe>
            </>
          ) : (
            <>
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
`;
const StTapMenue = styled.div`
  display: flex;
`;
const StNic = styled.div`
  font-weight: 800;
  padding: 10px 15px;
`;

// import React from "react";
// import styled from "styled-components";
// function Header() {
//   const handleLogoutBtn = () => {
//     // 로컬 스토리지에서 "토큰"이라는 이름의 값을 삭제
//     localStorage.removeItem("token");
//     // 로그아웃 로직 추가
//     // ...
//   };
//   return (
//     <StWidthWraprer className="headerWidth">
//       <img className="logoG" src={"Balance Game.png"} alt="logo"/>
//       <StLoginBtn className="btnLogin" onClick={handleLogoutBtn}>로그아웃</StLoginBtn>
//     </StWidthWraprer>
//   );
// }

// export default Header;
// const StWidthWraprer = styled.div`
//   width: 100%;
//   padding: 3%;
//   margin: 0 auto;
//   box-sizing: border-box;
//   overflow: hidden;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position :fixed;
//   border :1px solid blak;

// `
// const StLoginBtn = styled.button`

// `

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ButtonRe, ButtonStyleJoin, ButtonStyleLogin } from "./Button";
import { FlexCenter, FlexRow } from "./Flex";
import { useEffect, useState } from "react";
import { removeCookie, getCookie, setCookie } from "../cookie/cookie";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookierefreshToken = getCookie("refreshToken");
  const token = localStorage.getItem("localAccessToken");
  //const isLoggedIn = token ? true : false;

  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  const handleLogoutBtn = () => {
    removeCookie("refreshToken");
    localStorage.removeItem("localNickName");
    localStorage.removeItem("localAccessToken");
    setIsLoggedIn(false);
  };

  const userNickName = localStorage.getItem("localNickName");
  //가드;
  useEffect(() => {
    if (cookierefreshToken) {
      navigate("/");
    }
  }, []);

  const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

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
        </FlexRow>
        <StButtonWrap>
          {isLoggedIn ? (
            <>
              <ButtonStyleJoin onClick={handleLogoutBtn}>
                LOGOUT
              </ButtonStyleJoin>
              <>{userNickName}</>
            </>
          ) : (
            <>
              <ButtonStyleJoin
                onClick={() => {
                  navigate("/signup");
                  setIsLoggedIn(true);
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

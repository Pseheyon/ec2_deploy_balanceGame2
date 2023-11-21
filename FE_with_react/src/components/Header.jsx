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
  const resposeNickname = useSelector((state) => state.login.users[0].nickname);

  const isLoggedIn = useSelector((state) => !!state.login.users[0].nickname);

  console.log("Current Login State:", resposeNickname);
  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 닉네임을 가져와 Redux 상태에 저장
    const userNickName = localStorage.getItem("localNickName");
    if (userNickName) {
      dispatch(loginSuccess({ nickname: userNickName }));
    }
  }, [dispatch]);
  const handleLogoutBtn = () => {
    // 로컬 스토리지 클리어
    localStorage.removeItem("localNickName");
    localStorage.removeItem("localAccessToken");

    // 로그아웃 액션 dispatch
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
        </FlexRow>
        <StButtonWrap>
          {isLoggedIn ? (
            <>
              {/* <>{userNickName}</> */}
              <>{resposeNickname}</>
              {console.log("resposeNickname", resposeNickname)}
              <ButtonStyleJoin onClick={handleLogoutBtn}>
                LOGOUT
              </ButtonStyleJoin>
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

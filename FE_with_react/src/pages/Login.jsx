import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __login } from "../redux/modules/login";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { ButtonStyleJoin, ButtonStyleLogin } from "../components/Button";
import { FlexRowCenter } from "../components/Flex";
import { removeCookie, getCookie, setCookie } from "../cookie/cookie";
import { logoutSuccess, loginSuccess } from "../redux/modules/login";

function Login({ setIsLoggedIn }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    event.preventDefault();

    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  // const cookierefreshToken = getCookie("refreshToken");
  // const userNickName = localStorage.getItem("localNickName");

  // //가드;
  // useEffect(() => {
  //   if (cookierefreshToken && userNickName) {
  //     navigate("/");
  //   }
  // }, [cookierefreshToken, userNickName]);

  // const submitButtonHandler = async (event) => {
  //   event.preventDefault();

  //   try {
  //     // 로그인 요청을 서버로 보냄
  //     const response = await dispatch(__login(user));

  //     // 응답에서 데이터를 가져와서 loginSuccess 액션을 디스패치
  //     const { accessToken, nickname } = response.payload;
  //     dispatch(loginSuccess({ accessToken, nickname }));

  //     // 페이지 이동
  //     navigate("/");
  //   } catch (error) {
  //     // 로그인 요청이 실패하면 에러 처리
  //     console.error("로그인 에러:", error);
  //   }
  // };
  const submitButtonHandler = async (event) => {
    event.preventDefault();

    try {
      // 로그인 요청을 서버로 보냄
      const response = await dispatch(__login(user));
      navigate("/");
    } catch (error) {
      // 로그인 요청이 실패하면 에러 처리
      console.error("로그인 에러:", error);
    }
  };

  return (
    <>
      <StBackGroundImg>
        <SignupBox>
          LOGIN
          <form onSubmit={submitButtonHandler}>
            <StInputWrap>
              <Input
                text="ID"
                type="text"
                value={user.userId}
                name="userId"
                onChange={changeInputHandler}
                placeholder="아이디를 입력해주세요"
                required
              />
              <Input
                text={"PW"}
                type="password"
                value={user.password}
                name="password"
                onChange={changeInputHandler}
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </StInputWrap>
            <FlexRowCenter>
              <>
                <ButtonStyleJoin
                  onClick={() => {
                    navigate("/");
                  }}
                  buttonStyle={buttonStyle}
                >
                  Join
                </ButtonStyleJoin>
                <ButtonStyleLogin
                  onClick={() => {
                    navigate("/login");
                  }}
                  buttonStyle={buttonStyle}
                >
                  Login
                </ButtonStyleLogin>
              </>
            </FlexRowCenter>
          </form>
        </SignupBox>
      </StBackGroundImg>
    </>
  );
}
export default Login;
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const StBackGroundImg = styled.div`
  font-family: "Montserrat";
  background-image: url(${BACKEND_SERVER}/react/background/Login.png);
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-size: 52px;
  font-weight: 900;
`;

const SignupBox = styled.div`
  width: 544px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 80px;
  padding: 64px 64px 46px 64px;
  box-sizing: border-box;
  background: rgba(255, 72, 179, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 53px;
`;
const StInputWrap = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const buttonStyle = {
  height: "55px",
  fontSize: "20px",
  marginTop: "20px",
};

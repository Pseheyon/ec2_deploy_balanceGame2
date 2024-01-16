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
                    navigate("/signup");
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
  font-size: 40px;
  font-weight: 900;
`;

const SignupBox = styled.div`
  width: 460px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 80px;
  padding: 54px 54px 40px 54px;
  box-sizing: border-box;
  background: rgba(255, 72, 179, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 53px;
`;
const StInputWrap = styled.div`
  margin-bottom: 12px;
  margin-top: 12px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const buttonStyle = {
  height: "48px",
  fontSize: "16px",
  marginTop: "10px",
};

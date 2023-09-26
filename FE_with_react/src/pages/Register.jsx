import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __signup } from "../redux/modules/signup";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import {
  ButtonRe,
  ButtonStyleJoin,
  ButtonStyleLogin,
} from "../components/Button";
import { FlexRowCenter } from "../components/Flex";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    dispatch(__signup(user));
  };

  // const isLoggedIn = token ? true : false;
  // //가드;
  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <StBackGroundImg>
      <SignupBox>
        SIGNUP
        <form onSubmit={submitButtonHandler}>
          <StInputWrap>
            <Input
              text="ID"
              type="text"
              value={user.nickname}
              name="nickname"
              onChange={changeInputHandler}
              placeholder="아이디를 입력해주세요 🙏"
              required
            />
            <Input
              text="PW"
              type="password"
              value={user.password}
              name="password"
              onChange={changeInputHandler}
              placeholder="영문, 숫자, 특수문자 8~13자"
              required
            />
            <Input
              text="PW"
              type="password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={changeInputHandler}
              placeholder="비밀번호를 다시 입력해주세요"
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
  );
}
export default Signup;
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const StBackGroundImg = styled.div`
  font-family: "Montserrat" !important;
  background-image: url(${BACKEND_SERVER}/react/background/signup.png);
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

const SignupBox = styled.form`
  width: 544px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  /* background-color: #ffafd6; */
  padding: 64px 64px 46px 64px;

  background: rgba(255, 72, 179, 0.35);
  backdrop-filter: blur(25px);
  border-radius: 53px;
`;
const StInputWrap = styled.div`
  margin-bottom: 20px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SignupBtn = styled.button`
  width: 50%;
  height: 30px;
  margin: 0 auto;
`;
const buttonStyle = {
  height: "55px",
  fontSize: "20px",
};

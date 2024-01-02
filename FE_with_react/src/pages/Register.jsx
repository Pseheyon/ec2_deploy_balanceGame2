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
    userId: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    email: "",
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
    navigate("/login");
  };

  return (
    <StBackGroundImg>
      <SignupBox>
        SIGNUP
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
              text="Nickname"
              type="text"
              value={user.nickname}
              name="nickname"
              onChange={changeInputHandler}
              placeholder="닉네임을 입력해주세요"
              required
            />
            <Input
              text="Email"
              type="text"
              value={user.email}
              name="email"
              onChange={changeInputHandler}
              placeholder="이메일을 입력해주세요"
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
              text="PWConfirm"
              type="password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={changeInputHandler}
              placeholder="비밀번호를 다시 입력해주세요"
              required
            />
            <FlexRowCenter>
              <SignupBtn>
                <ButtonStyleJoin buttonStyle={buttonStyle}>
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
              </SignupBtn>
            </FlexRowCenter>
          </StInputWrap>
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
  box-sizing: border-box;
  /* background-color: #ffafd6; */
  padding: 64px 64px 46px 64px;

  background: rgba(255, 72, 179, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 53px;
`;
const StInputWrap = styled.div`
  margin-bottom: 12px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

const SignupBtn = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: row;
  width: 100%;
`;
const buttonStyle = {
  height: "48px",
  fontSize: "16px",
};

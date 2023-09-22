import React from "react";
import styled, { keyframes } from "styled-components";

const Error = () => {
  return (
    <StBackGroundImg>
      <StBackGroundDeco>
        <StBold>404 Error</StBold>
        <StError>잘못된 접근입니다. 재접속해주세요~</StError>
      </StBackGroundDeco>
    </StBackGroundImg>
  );
};

export default Error;
const ani = keyframes`from {background-position: -100vw center } to{background-position: 100vw center}`;
const StBackGroundImg = styled.div`
  font-family: "Montserrat";
  background-image: url("background/error.png");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  white-space: pre;
  /* animation: ${ani} 15s linear infinite; */
`;
const StBackGroundDeco = styled.div`
  font-family: "Montserrat";
  background-image: url("background/errorDeco.png");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  white-space: pre;
  mix-blend-mode: multiply;

  animation: ${ani} 15s linear infinite;
`;
const StBold = styled.div`
  font-weight: 900;
  font-size: 52px;
`;
const StError = styled.div`
  font-weight: 300;
  font-size: 32px;
`;

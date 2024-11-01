import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonRe } from "../components/Button";
import { useEffect } from "react";
import { getCookie } from "../cookie/cookie";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
function Home() {
  const navigate = useNavigate();
  const cookierefreshToken = getCookie("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (cookierefreshToken) {
      navigate("/");
    }
  }, []);

  const handleGameStart = () => {
    if (!accessToken) {
      alert("로그인 후 게임을 생성할 수 있습니다!");
      navigate("/games");
    } else {
      navigate("/game/submit");
    }
  };

  return (
    <StWarpper>
      <StBackGroundImg>
        <StHomeContainer>
          <div>
            <StTitle src={`${BACKEND_SERVER}/balancegame/images/Logo.png`} />
          </div>
          <StHomeCardWrapper>
            <StPosition>
              <StButtonWrapper>
                <ButtonRe
                  buttonStyle={buttonStyleHome}
                  onClick={handleGameStart}
                >
                  GAME START
                </ButtonRe>
              </StButtonWrapper>
              <StExplanation
                src={`${BACKEND_SERVER}/balancegame/images/homeInfo.png`}
              />
            </StPosition>
          </StHomeCardWrapper>
        </StHomeContainer>
      </StBackGroundImg>
    </StWarpper>
  );
}

export default Home;

const StWarpper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: aliceblue;
  border: 1px solid black;
  box-sizing: border-box;
`;
const StBackGroundImg = styled.div`
  background-image: url(${BACKEND_SERVER}/balancegame/background/logout.png);
  background-size: cover;
  background-position: center;

  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const StHomeContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  padding-top: 6vh;
`;
const StHomeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  height: 67vh;
`;
const StButtonWrapper = styled.div`
  position: relative;

  box-sizing: border-box;
  padding-top: 4%;
  display: flex;
  width: auto;
  justify-content: center;
  white-space: nowrap;
`;
const StTitle = styled.img`
  width: 400px;
  height: auto;
`;
const StExplanation = styled.img`
  width: 460px;
  height: auto;
  position: absolute;
  box-sizing: border-box;
`;
const StPosition = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const buttonStyleHome = {
  background: "black",
  color: "white",
  zIndex: "10",
  padding: "16px 22px",
  margin: "0",
  marginTop: "16px",
  fontSize: "20px",
};

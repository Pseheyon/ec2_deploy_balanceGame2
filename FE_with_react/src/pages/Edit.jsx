import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonRe } from "../components/Button";
import { __getCardsThunk } from "../redux/modules/cardsSlice";
import { __updatedCardThunk, __addCardThunk } from "../redux/modules/editSlice";
import { Input } from "../components/Input";
//  등록하면 cardlist에 card 추가 되도록.

function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [card, setCard] = useState({
    title: "",
    optionA: "",
    optionB: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setCard((old) => {
      return { ...old, [name]: value };
    });
  };
  useEffect(() => {
    dispatch(__getCardsThunk());
  }, []);
  //추가 함수
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__addCardThunk(card));
    setCard({ title: "", optionA: "", optionB: "" });
  };
  console.log("dispatch-> ", dispatch);

  return (
    <StBackGroundImg>
      <StCardContainer>
        <StTitleWrapper>CREATE A GAME</StTitleWrapper>

        <form onSubmit={onSubmitHandler}>
          <StInputWrap>
            <Input
              text="title"
              type="text"
              name="title"
              placeholder="10자 내로 제목을 지어주세요."
              minLength="1"
              maxLength="10"
              value={card.title}
              onChange={changeInputHandler}
              required
            ></Input>
            <Input
              text="optionA"
              type="text"
              name="optionA"
              placeholder="옵션A를 기재해주세요."
              minLength="1"
              maxLength="25"
              value={card.optionA}
              onChange={changeInputHandler}
              required
            />
            <Input
              text="optionB"
              type="text"
              name="optionB"
              placeholder="B의견을 적어주세요(25자 이내)"
              minLength="1"
              maxLength="25"
              value={card.optionB}
              onChange={changeInputHandler}
              required
            />
          </StInputWrap>
        </form>
        <StButtonWrapper className="buttonWrap">
          <ButtonRe
            onClick={() => {
              navigate("/games");
            }}
            buttonStyle={buttonStyleLeft}
          >
            CANCEL
          </ButtonRe>

          <ButtonRe
            onClick={() => {
              navigate("/games");
              dispatch(__addCardThunk(card));
              setCard({ title: "", optionA: "", optionB: "" });
            }}
            buttonStyle={buttonStyleRight}
          >
            CREATE
          </ButtonRe>
        </StButtonWrapper>
      </StCardContainer>
    </StBackGroundImg>
  );
}

export default Edit;
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
const StCardContainer = styled.div`
  border: 2px hidden lightgray;
  border-radius: 30px;
  background-color: #12d8b4;
  height: auto;
  padding: 54px 54px 40px 54px;
  margin: 0 auto;
  background: rgba(18, 209, 216, 0.6);
  backdrop-filter: blur(25px);
  border-radius: 53px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;
const StTitleWrapper = styled.div`
  font-size: 40px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  margin-top: 10px;
  white-space: nowrap;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
`;
const StBackGroundImg = styled.div`
  background-image: url(${BACKEND_SERVER}/react/background/submit.png);
  /* background-size: cover; */
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StInputWrap = styled.div`
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 500px;
`;
const StButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 20px;
`;
const buttonStyleLeft = {
  height: "48px",
  fontSize: "16px",
  backgroundColor: "#4075FF",
  with: `-webkit-fill-available`,
  border: "none",
};
const buttonStyleRight = {
  height: "48px",
  fontSize: "16px",
  backgroundColor: "black",
  with: `-webkit-fill-available`,
  color: "#98FCFF",
  border: "none",
};

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { __getComment } from "../redux/modules/commentASlice";
import {
  __getCardThunk,
  clearCard,
  __updatedCardThunk,
} from "../redux/modules/editSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Comments from "../features/card/Comments";
import styled, { keyframes } from "styled-components";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import heartIcon from "../image/Pasted.png";
import { FlexRow, FlexRowSpaceBet } from "../components/Flex";

const Detail = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  console.log("파람", gameId);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedOptionA, setUpdatedOptionA] = useState("");
  const [updatedOptionB, setUpdatedOptionB] = useState("");
  const [plusLikesA, setPlusLikesA] = useState(0);
  const [plusLikesB, setPlusLikesB] = useState(0);

  const card = useSelector((state) => {
    return state.card.card;
  });

  //console.log("디테일 페이지 카드", card);
  useEffect(() => {
    dispatch(__getCardThunk({ gameId: gameId }));
    return () => dispatch(clearCard());
  }, [dispatch, gameId]);

  // useEffect(() => {
  //   dispatch(__updatedCardThunk({ gameId: gameId }));
  //   return () => dispatch(clearCard());
  // }, [dispatch, gameId]);

  useEffect(() => {
    setUpdatedOptionA(card.optionA);
    setUpdatedOptionB(card.optionB);
    setPlusLikesA(card.likesA);
    setPlusLikesB(card.likesB);
  }, [card]);

  const saveUpdatedLikesA = (updatedLikesA) => {
    dispatch(
      __updatedCardThunk({
        ...card,
        likesA: updatedLikesA,
      })
    );
  };
  const saveUpdatedLikesB = (updatedLikesB) => {
    dispatch(
      __updatedCardThunk({
        ...card,
        likesB: updatedLikesB,
      })
    );
  };
  const onIncreaseLikesAHandler = () => {
    const updatedLikesA = plusLikesA + 1;
    setPlusLikesA(updatedLikesA);
    saveUpdatedLikesA(updatedLikesA);
  };
  const onIncreaseLikesBHandler = () => {
    const updatedLikesB = plusLikesB + 1;
    setPlusLikesB(updatedLikesB);
    saveUpdatedLikesB(updatedLikesB);
  };

  const onSaveButtonHandler = () => {
    if (updatedOptionA.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    } else if (updatedOptionB.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }

    dispatch(
      __updatedCardThunk({
        ...card,
        optionA: updatedOptionA,
        optionB: updatedOptionB,
        likesA: plusLikesA,
        likesB: plusLikesB,
      })
    );
    setIsEditMode(false);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <div>로딩중.....ㅎㅎ</div>;
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }
  return (
    <StBackGroundImg>
      <StBackGameImgColor />
      <StBackGameImg
        style={{ backgroundImage: `url(${card.GameImg})` }}
      ></StBackGameImg>
      <StBackGroundDeco>
        {isVisible && (
          <StBackStyle>
            <Link to={"/games"}>
              <StTitle>{card.title}</StTitle>
              <BsArrowLeftCircleFill
                style={{
                  color: "#FF449E",
                  fontSize: "25px",
                  position: "absolute",
                  top: "40px",
                  left: "40px",
                }}
              />
            </Link>

            {isEditMode ? (
              <>
                <StOptionWarpper>
                  <StVs>VS</StVs>
                  <StContentBox>
                    <FlexRowSpaceBet>
                      <StOtion className="StOtionTxtA">option A</StOtion>
                      <StOptionLikes>
                        <FlexRow>
                          <StLikeCounter>{card?.likesA}</StLikeCounter>
                          <img
                            style={{
                              height: "27px",
                              cursor: "pointer",
                            }}
                            src={heartIcon}
                            onClick={onIncreaseLikesAHandler}
                            alt=""
                          />
                        </FlexRow>
                      </StOptionLikes>
                    </FlexRowSpaceBet>

                    <StOtionTxt className="StOtionTxtA">
                      <StTextarea
                        className="StOtionTxtA"
                        name="body"
                        rows="10"
                        maxLength={200}
                        value={updatedOptionA}
                        onChange={(event) => {
                          setUpdatedOptionA(event.target.value);
                        }}
                      />
                    </StOtionTxt>
                  </StContentBox>
                  <StContentBox>
                    <FlexRowSpaceBet>
                      <StOtion className="StOtionTxtB">option B</StOtion>
                      <StOptionLikes>
                        <FlexRow>
                          <StLikeCounter>{card?.likesB}</StLikeCounter>
                          <img
                            style={{
                              height: "27px",
                              cursor: "pointer",
                            }}
                            src={heartIcon}
                            onClick={onIncreaseLikesBHandler}
                            alt=""
                          />
                        </FlexRow>
                      </StOptionLikes>
                    </FlexRowSpaceBet>

                    <StOtionTxt className="StOtionTxtB">
                      <StTextarea
                        className="StOtionTxtB"
                        name="body"
                        rows="10"
                        maxLength={200}
                        value={updatedOptionB}
                        onChange={(event) => {
                          setUpdatedOptionB(event.target.value);
                        }}
                      />
                    </StOtionTxt>
                  </StContentBox>
                </StOptionWarpper>
              </>
            ) : (
              <StOptionWarpper>
                <StVs>VS</StVs>
                <StContentBox>
                  <FlexRowSpaceBet>
                    <StOtion className="StOtionTxtA">option A</StOtion>
                    <StOptionLikes>
                      <FlexRow>
                        <StLikeCounter>{card?.likesA}</StLikeCounter>
                        <img
                          style={{
                            height: "27px",
                            cursor: "pointer",
                          }}
                          src={heartIcon}
                          onClick={onIncreaseLikesAHandler}
                          alt=""
                        />
                      </FlexRow>
                    </StOptionLikes>
                  </FlexRowSpaceBet>

                  <StOtionTxt className="StOtionTxtA">
                    {card.optionA}
                  </StOtionTxt>
                </StContentBox>
                <StContentBox>
                  <FlexRowSpaceBet>
                    <StOtion className="StOtionTxtB">option B</StOtion>
                    <StOptionLikes>
                      <FlexRow>
                        <StLikeCounter>{card?.likesB}</StLikeCounter>
                        <img
                          style={{
                            height: "27px",
                            cursor: "pointer",
                          }}
                          src={heartIcon}
                          onClick={onIncreaseLikesBHandler}
                          alt=""
                        />
                      </FlexRow>
                    </StOptionLikes>
                  </FlexRowSpaceBet>

                  <StOtionTxt className="StOtionTxtB">
                    {card?.optionB}
                  </StOtionTxt>
                </StContentBox>
              </StOptionWarpper>
            )}

            <div>
              {isEditMode ? (
                <StEditBTN onClick={onSaveButtonHandler}>SAVE</StEditBTN>
              ) : (
                <StEditBTN
                  onClick={() => {
                    setIsEditMode(true);
                  }}
                >
                  EDIT
                </StEditBTN>
              )}
            </div>
            {!isEditMode && <Comments />}
            <Stfooter></Stfooter>
          </StBackStyle>
        )}
      </StBackGroundDeco>
    </StBackGroundImg>
  );
};

export default Detail;
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
const StBackGroundImg = styled.div`
  background-image: url(${BACKEND_SERVER}/react/background/cardlist.png);
  /* background-size: cover; */
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background-size: cover;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;
const diagonalMove = keyframes`
  0% {
    background-position: 100vw 0vh;
  }
  100% {
    background-position: 0vw 100vh;
  }
`;

const StBackGroundDeco = styled.div`
  position: absolute;
  top: 0;
  background-image: url("http://localhost:3000/react/background/bgDeco.png");
  background-position-y: 0;
  background-size: 100vw auto;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-size: cover;
  position: relative;
  overflow-y: auto;
  background-size: 100%;
  background-repeat: repeat;
  z-index: 3;
  animation: ${diagonalMove} 30s linear infinite;
  overflow-x: hidden;
`;

const StBackGameImgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: rgba(87, 83, 253, 0.7);
  mix-blend-mode: normal;
  border-radius: 0px 0px 20px 20px;
`;
const StBackGameImg = styled.div`
  position: absolute;
  border-radius: 0px 0px 20px 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
`;
const slideInUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;
const StBackStyle = styled.div`
  width: 75vw;
  /* width: 1183px; */
  min-height: 90vh;
  position: relative;
  position: absolute;
  z-index: 4;
  margin: 12vh auto 94px auto;
  padding: 40px 46px;
  background-color: #ffbae2;
  border-radius: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideInUp} 0.5s;
  transition: 0.3s;
`;
const StEditBTN = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  border-radius: 40px;
  border: 0px;
  color: #ff449e;
  background-color: #ffe3f1;
  padding: 5px 20px;
  font-weight: 700;
`;
const StTitle = styled.div`
  width: fit-content;
  box-sizing: border-box;
  padding: 20px 25px;
  background: rgb(0, 0, 0);
  border-radius: 100px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 18px;
  text-wrap: nowrap;
  color: white;
`;
const StOptionWarpper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 2vw;
`;
const StContentBox = styled.div`
  margin-top: 37px;
  width: 24vw;
  display: flex;
  flex-direction: column;
`;
const StOtionTxt = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  overflow-wrap: break-word;
`;
const StLikeCounter = styled.div`
  /* 51 */

  width: 18px;
  height: 22px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-right: 6px;
  /* identical to box height */
  text-align: center;

  color: #ffffff;
`;

const StOptionLikes = styled.div`
  display: flex;
  justify-content: space-between; /* Option A */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  /* identical to box height */
  text-align: center;
  color: #2da4a8;
  margin-bottom: 18px;
`;
const StVs = styled.div`
  /* VS */

  position: absolute;
  width: 44px;
  height: 18px;
  left: calc(50% - 44px / 2);
  top: 220px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 18px;
  /* identical to box height, or 56% */
  text-align: center;

  color: #000000;

  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
`;

const StTextarea = styled.textarea`
  width: 100%;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  background-color: #ffbae2;
  border: none;
  padding: 0;
  max-height: 130px;
  height: min-content;
  background-attachment: local;
  background-image: linear-gradient(to right, #ffbae2 10px, transparent 10px),
    linear-gradient(to left, #ffbae2 10px, transparent 10px),
    repeating-linear-gradient(
      #ffbae2,
      #ffbae2 43px,
      white 43px,
      white 44px,
      #ffbae2 44px
    );
  line-height: 43px;
  padding: 8px 10px;
  :focus {
    outline: none;
  }
`;
const StButton = styled.button`
  border-radius: 40px;
  border: 0px;
  color: #ff449e;
  background-color: #ffe3f1;
  padding: 5px 20px;
`;
const StOtion = styled.div`
  font-size: "12px";
  color: "#FF449E";
  margin-bottom: 18px;
`;
const Stfooter = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 3vh;
  position: absolute;
  bottom: -94px;
  z-index: 100;
  /* background-color: aqua;
  border: solid 1px aqua; */
  box-sizing: border-box;
`;

import React from "react";
import { FlexRowCenter, FlexRowSpaceBet } from "../components/Flex";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getCardsThunk } from "../redux/modules/cardsSlice";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CardList = () => {
  const dispatch = useDispatch();
  // const [cards, setCards] = useState([]);
  const cardtest = useSelector((state) => state.card);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const { isLoading, error, cards } = useSelector((state) => {
    return state.cards;
  });
  const handleGameStart = () => {
    if (!accessToken) {
      alert("로그인 후 게임을 생성할 수 있습니다!");
      navigate("/games");
    } else {
      navigate("/game/submit");
    }
  };
  useEffect(() => {
    dispatch(__getCardsThunk());
  }, []);

  if (isLoading) {
    return <div></div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

  return (
    <StBackGroundImg>
      {/* 게임 등록하기 버튼 */}
      <StCreatButton onClick={handleGameStart}>CREATE A GAME</StCreatButton>
      <FloatingButton onClick={handleGameStart}>게임 등록하기</FloatingButton>
      <StBardList>
        {cards.map((card) => (
          <Link to={`/games/${card.gameId}`} key={card.gameId}>
            <StCard
            // style={{ backgroundImage: `url(${card.img})` }}
            >
              <FlexRowSpaceBet>
                <StCardTitle>{card.title} </StCardTitle>
                <StNic>
                  작성자 : <span>{card.userNic}</span>
                </StNic>
              </FlexRowSpaceBet>

              <StFlexRowCenter>
                <StOption>{card.optionA}</StOption>
                <div>vs</div>
                <StOption>{card.optionB}</StOption>
              </StFlexRowCenter>
            </StCard>
          </Link>
        ))}
      </StBardList>
    </StBackGroundImg>
  );
};
export default CardList;
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
const StBackGroundImg = styled.div`
  background-image: url(${BACKEND_SERVER}/react/background/cardlist.png);
  /* background-image: url("./background/cardlist.png"); */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-repeat: repeat-y;
  background-size: cover;
  background-position-y: 0;
  margin: 0;
  padding: 0 0 50px 0;
  overflow-x: hidden;
  min-height: 100vh;
  justify-content: flex-start;
  /* white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none; */
`;
const StBardList = styled.ul`
  width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  color: white;
  margin-top: 32px;
  padding: 0;
`;

const StCard = styled.li`
  width: 100%;
  height: 100px;
  padding: 16px 24px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 24px;
  font-weight: 700;
  float: left;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #5753fd;
  box-shadow: 0px 5px 0px rgba(109, 255, 246, 0.5);
  transition: all 0.3s;
  overflow-wrap: break-word;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 0px rgba(118, 156, 255);
    font-weight: 900;
    -webkit-text-stroke: 1 black;
    text-shadow: 1px 1px black; /* Rectangle 32 */
    background-color: #ff8bcf;
    border-radius: 24px;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 150px;
  height: 150px;
  margin: 3vh;
  box-sizing: border-box;
  border-radius: 50%;
  /* background-color: #007bff; */
  background-color: #000000;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
const StCreatButton = styled.button`
  width: 230px;
  height: 48px;
  margin: 100px auto 0 auto;
  background: #000000;
  border-radius: 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-wrap: nowrap;
  color: white;
  text-align: center;
`;
const StCardTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  text-shadow: 1px 1px black;
`;
const StOption = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const StNic = styled.div`
  font-weight: 400;
  font-size: 12px;
`;
const StFlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 3%;
  &:hover {
    color: "black";
  }
`;

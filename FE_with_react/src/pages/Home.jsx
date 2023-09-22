// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// const Home = () => {
//   const navi = useNavigate();
//   const tokennickname = localStorage.getItem("token");
//   const token = localStorage.getItem("token");
//   const isLoggedIn = token ? true : false;
//   console.log(tokennickname);
//   const handleLogoutBtn = () => {
//     // 로컬 스토리지에서 "토큰"이라는 이름의 값을 삭제
//     localStorage.removeItem("token");
//     // 로그아웃 로직 추가
//     // ...
//   };
//   //가드;
//   useEffect(() => {
//     if (token) {
//       navi("/");
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Home</h2>
//       {/* {isLoggedIn ? ( */}
//       <form>
//         {/* 로그인 상태에 따른 버튼 표시 */}
//         {isLoggedIn ? (
//           <button onClick={handleLogoutBtn}>로그아웃</button>
//         ) : (
//           <>
//             <button
//               onClick={() => {
//                 navi("/signup");
//               }}
//             >
//               회원가입
//             </button>
//             <button
//               onClick={() => {
//                 navi("/login");
//               }}
//             >
//               로그인
//             </button>
//           </>
//         )}
//         {/* <button>로그인</button>
//       <button onClick={handleLogout}>로그아웃</button> */}
//       </form>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonRe } from "../components/Button";

function Home() {
  const navigate = useNavigate();
  return (
    <StWarpper>
      <StBackGroundImg>
        <StHomeContainer>
          <div>
            <StTitle src={"images/Logo.png"} />
          </div>
          <StHomeCardWrapper>
            <StPosition>
              <StButtonWrapper>
                <ButtonRe
                  buttonStyle={buttonStyleHome}
                  onClick={() => {
                    navigate("/games");
                  }}
                >
                  GAME START
                </ButtonRe>
              </StButtonWrapper>
              <StExplanation src="images/homeInfo.png" />
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
  background-image: url("background/logout.png");
  background-size: cover;
  background-position: center;

  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const StHomeContainer = styled.div`
  width: 552px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
const StTitle = styled.img``;
const StExplanation = styled.img`
  height: auto;
  position: absolute;
  width: 500px;
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
  padding: "20px 25px",
  margin: "0",
  marginTop: "30px",
  fontSize: "25px",
};

import styled from "styled-components";

export const ButtonRe = ({ onClick, children, buttonStyle }) => {
  return (
    <StbuttonRe style={buttonStyle} onClick={onClick}>
      {children}
    </StbuttonRe>
  );
};
export const ButtonStyleJoin = ({ onClick, children, buttonStyle }) => {
  return (
    <StButtoJoin style={buttonStyle} onClick={onClick}>
      {children}
    </StButtoJoin>
  );
};
export const ButtonStyleLogin = ({ onClick, children, buttonStyle }) => {
  return (
    <StButtonLogin style={buttonStyle} onClick={onClick}>
      {children}
    </StButtonLogin>
  );
};

export const StbuttonRe = styled.button`
  font-family: "Montserrat";
  border-radius: 50px;
  background-color: #ff83bf;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  padding: 6px 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
`;

export const StButtoJoin = styled.button`
  font-family: "Montserrat";
  width: 50%;
  background-color: #ff4ab3;
  font-weight: 600;
  margin-right: 10px;
  padding: 6px 12px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  justify-content: center;
`;

export const StButtonLogin = styled.button`
  font-family: "Montserrat";
  width: 50%;
  color: #ff83bf;
  font-weight: 600;
  background-color: black;
  padding: 6px 12px;
  font-size: 15px;
  border: none;
  cursor: pointer;

  justify-content: center;
`;

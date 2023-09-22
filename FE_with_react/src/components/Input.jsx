import styled from "styled-components";

export const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  text,
  children,
}) => {
  return (
    <InputArea text={text}>
      <StSpanName>{text} : </StSpanName>
      <StSignupInput
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      >
        {children}
      </StSignupInput>
    </InputArea>
  );
};

const InputArea = styled.div`
  font-family: "Montserrat";
  border: 1.2px solid black;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  font-weight: 600;
  align-items: baseline;
  font-size: 20px;
  word-break: keep-all;
`;
const StSpanName = styled.span`
  padding-left: 4%;
`;
const StSignupInput = styled.input`
  width: 70%;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 1%;
  font-weight: 800;
  font-weight: 100;
`;

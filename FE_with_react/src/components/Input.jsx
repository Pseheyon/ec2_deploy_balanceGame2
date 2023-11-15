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
  padding-left: 4%;
  width: 420px;
  font-weight: 600;
  align-items: baseline;
  font-size: 20px;
  word-break: keep-all;
  display: grid;
  justify-content: start;
  grid-template-columns: auto 3fr;
  // grid-template-columns: auto-fit minmax(20%, auto);
`;
const StSpanName = styled.span`
  text-align: left;
  white-space: nowrap;
`;
const StSignupInput = styled.input`
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 1%;
  font-weight: 800;
  font-weight: 100;
`;

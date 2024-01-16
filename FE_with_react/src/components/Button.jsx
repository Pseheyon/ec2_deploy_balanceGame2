import styled from "styled-components";

// const Button = ({ children, css }) => {
//   return <StbuttonRe css={css}>children</StbuttonRe>;
// };
// /* CSS */
// export const StStartButton = styled.button`
//   ${({ css }) => ({ ...css })}
//   background-color: #111827;
//   border: 1px solid transparent;
//   border-radius: 75rem;
//   box-sizing: border-box;
//   color: #ffffff;
//   cursor: pointer;
//   flex: 0 0 auto;
//   font-family: "Montserrat";
//   font-size: 1.925rem;
//   font-weight: 600;
//   line-height: 1.5rem;
//   padding: 0.75rem 1.2rem;
//   text-align: center;
//   text-decoration: none #6b7280 solid;
//   text-decoration-thickness: auto;
//   transition-duration: 0.2s;
//   transition-property: background-color, border-color, color, fill, stroke;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 14vw;
//   height: 7vh;
//   position: absolute;
//   z-index: 1;
//   margin: 20px 0 20px 0;

//   hover {
//     background-color: #374151;
//   }

//   focus {
//     box-shadow: none;
//     outline: 2px solid transparent;
//     outline-offset: 2px;
//   }

//   @media (min-width: 768px) {
//     .button-40 {
//       padding: 0.75rem 1.5rem;
//     }
//   }
// `;

// export const StCancelButton = styled.button`
//   ${({ css }) => ({ ...css })}
//   background-color: #4075FF;
//   border: 1px solid transparent;
//   border-radius: 75rem;
//   box-sizing: border-box;
//   color: black;
//   cursor: pointer;
//   flex: 0 0 auto;
//   font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
//     "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
//     "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//   font-size: 1.925rem;
//   font-weight: 600;
//   line-height: 1.5rem;
//   padding: 0.75rem 1.2rem;
//   text-align: center;
//   text-decoration: none #6b7280 solid;
//   text-decoration-thickness: auto;
//   transition-duration: 0.2s;
//   transition-property: background-color, border-color, color, fill, stroke;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 20vw;
//   height: 7vh;
//   z-index: 1;
//   margin: 30px 15px 0 0;

//   hover {
//     background-color: #374151;
//   }

//   focus {
//     box-shadow: none;
//     outline: 2px solid transparent;
//     outline-offset: 2px;
//   }

//   @media (min-width: 768px) {
//     .button-40 {
//       padding: 0.75rem 1.5rem;
//     }
//   }
// `;

// export const StCreateButton = styled.button`
//   ${({ css }) => ({ ...css })}
//   background-color: black;
//   border: 1px solid transparent;
//   border-radius: 75rem;
//   box-sizing: border-box;
//   color: white;
//   cursor: pointer;
//   flex: 0 0 auto;
//   font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
//     "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
//     "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//   font-size: 1.925rem;
//   font-weight: 600;
//   line-height: 1.5rem;
//   padding: 0.75rem 1.2rem;
//   text-align: center;
//   text-decoration: none #6b7280 solid;
//   text-decoration-thickness: auto;
//   transition-duration: 0.2s;
//   transition-property: background-color, border-color, color, fill, stroke;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 20vw;
//   height: 7vh;
//   right: 0;
//   z-index: 1;
//   margin: 30px 0 0 0;

//   hover {
//     background-color: #374151;
//   }

//   focus {
//     box-shadow: none;
//     outline: 2px solid transparent;
//     outline-offset: 2px;
//   }

//   @media (min-width: 768px) {
//     .button-40 {
//       padding: 0.75rem 1.5rem;
//     }
//   }
// `;
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

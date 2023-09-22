import React from "react";
import styled from "styled-components";

export const Flex = () => {
  return <FlexCenter></FlexCenter>;
};

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;
export const FlexRowSpaceBet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

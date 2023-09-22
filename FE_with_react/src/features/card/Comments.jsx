import React from "react";
import AddCommentForm from "../comments/AddCommentForm";
import CommentsAList from "../comments/CommentsAList";
import styled from "styled-components";

function Comments() {
  return (
    <BackStyle>
      <BackStyle>
        <AddCommentForm />
      </BackStyle>
      <CommentBox>
        <CommentsAList />
      </CommentBox>
    </BackStyle>
  );
}

export default Comments;

// Form Data
// json형식으로 리퀘스트 보냄

const BackStyle = styled.div`
  /* background-color: #ffafd6;
    width: 100%;
    height: 200px; */
  width: 100%;
`;
const CommentBox = styled.div`
  height: auto;
  /*width: 100%;
  display: flex;
  height: 270px; */
`;

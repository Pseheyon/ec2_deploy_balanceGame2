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

const BackStyle = styled.div`
  width: 100%;
`;
const CommentBox = styled.div`
  height: auto;
`;

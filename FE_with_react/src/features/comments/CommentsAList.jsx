import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { __getComments } from "../../redux/modules/commentASlice";
import { __updatedComment } from "../../redux/modules/commentASlice";
import EditComment from "./EditComment";

const CommentsAList = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();

  const { isLoading, error, comments } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(__getComments({ gameId: gameId }));
  }, [dispatch, gameId]);

  const clickisEdit = (commentId, updatedCommentContent) => {
    dispatch(__updatedComment(commentId, updatedCommentContent));
    console.log(commentId);
  };
  if (isLoading) {
    return <div>로딩중.....ㅎㅎ</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log("comment확인!!", comments);

  return (
    <StwidthBox>
      <BoxDiv>
        <div className="ATitle">A</div>

        {comments &&
          comments
            // Object.entries(comments)
            .filter((comment) => comment.option === "optionA")
            .map((comment) => (
              <EditComment
                className="optionABoxDiv"
                key={comment._id}
                comment={comment}
                // onClick={() => clickisEdit(comment.commentId, __updatedComment)}
              >
                <>{comment.content}</>
                {console.log(`확인,${comment}`)}
              </EditComment>
            ))}
      </BoxDiv>
      <BoxDiv>
        <div className="BTitle">B</div>

        {comments &&
          comments
            //Object.entries(comments)
            .filter((comment) => comment.option === "optionB")
            .map((comment) => (
              <EditComment
                className="optionBBoxDiv"
                key={comment._id}
                comment={comment}
                onClick={() => clickisEdit(comment._id, __updatedComment)}
              />
            ))}
      </BoxDiv>
    </StwidthBox>
  );
};

export default CommentsAList;

const BoxDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
`;

const StwidthBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: "20px";
  word-wrap: break-word;
  gap: 2vw;
`;

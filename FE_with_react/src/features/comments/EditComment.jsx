import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexRow } from "../../components/Flex";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteComment,
  __updatedComment,
  __getComments,
} from "../../redux/modules/commentASlice";
import {
  clearComment,
  globalEditModeToggle,
  __getComment,
} from "../../redux/modules/commentSlice";
import CommentsAList from "./CommentsAList";

const EditComment = ({ comment }) => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  // console.log('comment', comment)
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const { isGlobalEditmode } = useSelector((state) => state.comment);

  const updates = { editContent };

  const onDeleteButtonHandler = async () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      console.log(
        "Deleting comment with commentId gameId",
        comment.commentId,
        gameId
      );
      await dispatch(
        __deleteComment({
          commentId: comment.commentId,
          option: comment.option,
          gameId,
        })
      );

      // 삭제 후에 새로운 데이터를 가져옴
      await dispatch(__getComments(gameId)); // gameId에 맞는 댓글들을 가져오는 액션

      // 댓글 삭제 후 UI 업데이트를 위해 setEdit를 false로 설정
      setEdit(false);
    } else {
      return;
    }
  };

  return (
    <>
      {edit ? (
        <CommentBox
          key={comment.commentId}
          className={`${comment.option}BoxDiv`}
        >
          <span>{comment.userId}</span>
          <input
            style={{
              border: "0px",
              // backgroundColor: "#FFF2F8",
              borderRadius: "10px",
            }}
            className="box_content"
            type="text"
            value={editContent}
            onChange={(event) => setEditContent(event.target.value)}
          />
          <span>
            <EditButton
              onClick={() => {
                dispatch(
                  __updatedComment({
                    commentId: comment.commentId,
                    gameId: gameId,
                    content: editContent,
                  })
                );
                setEdit((pre) => !pre);
              }}
            >
              완료
            </EditButton>
          </span>
        </CommentBox>
      ) : (
        <CommentBox
          key={comment.commentId}
          className={`${comment.option}BoxDiv`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <EditButton>{comment.userId}</EditButton>
            <FlexRow>
              <EditButton
                fontsize="12px"
                onClick={() => {
                  // dispatch(__updatedComment(comment.commentId, editContent));
                  setEdit(!edit);
                }}
              >
                수정
              </EditButton>
              <StSpanFont>|</StSpanFont>
              <EditButton
                fontsize="12px"
                onClick={onDeleteButtonHandler}
                disabled={isGlobalEditmode}
              >
                삭제
              </EditButton>
            </FlexRow>
          </div>
          <ContentColor fontsize="16px" className="box_content">
            {updates.editContent}
          </ContentColor>
        </CommentBox>
      )}
    </>
  );
};

export default EditComment;

const CommentBox = styled.div`
  width: inherit;

  border-radius: 23px;

  padding: 4% 3%;
  box-sizing: border-box;
  /* background-color: #ffe3f1; */
  margin-top: 20px; /* Frame 31 */

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 14px;

  color: #ffffff;
`;
const ContentColor = styled.div`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;
const StSpanFont = styled.span`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 300;
  color: #ffe3f1;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const EditButton = styled.button`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 300;
  color: #ffe3f1;
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.fontsize};
  margin-bottom: 2%;
`;

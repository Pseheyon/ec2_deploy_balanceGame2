import React, { useState } from "react";
import styled from "styled-components";
import { FlexRow } from "../../components/Flex";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteComment,
  __updatedComment,
  __getComments,
} from "../../redux/modules/commentASlice";
import { __getComment } from "../../redux/modules/commentSlice";

const EditComment = ({ comment }) => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const { isGlobalEditmode } = useSelector((state) => state.comment);
  const userNic = localStorage.getItem("localNickName");
  const updates = { editContent };

  const onDeleteButtonHandler = async () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      await dispatch(
        __deleteComment({
          _id: comment._id,
          option: comment.option,
          gameId,
        })
      );
      await dispatch(__getComments({ gameId }));
      setEdit(false);
    } else {
      return;
    }
  };

  const onUpdateButtonHandler = async () => {
    if (editContent.trim() === "") {
      alert("수정될 내용을 입력해주세요.");
    } else {
      const result = window.confirm("수정하시겠습니까?");
      if (result) {
        await dispatch(
          __updatedComment({
            _id: comment._id,
            gameId: gameId,
            author: comment.author,
            content: editContent,
          })
        );
        await dispatch(__getComments({ gameId }));
        setEdit((pre) => !pre);
      }
    }
  };
  return (
    <>
      {edit ? (
        <CommentBox key={comment._id} className={`${comment.option}BoxDiv`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <EditButton>{comment.author}</EditButton>
            <EditButton onClick={onUpdateButtonHandler}>완료</EditButton>
          </div>
          <InputContentColor
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
        </CommentBox>
      ) : (
        <CommentBox key={comment._id} className={`${comment.option}BoxDiv`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <EditButton>{comment.author}</EditButton>
            {userNic === comment.author ? (
              <FlexRow>
                <EditButton
                  fontsize="12px"
                  onClick={() => {
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
            ) : (
              <>
                <FlexRow>
                  <EditButton
                    fontsize="12px"
                    onClick={() => {
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
              </>
            )}
          </div>
          <ContentColor fontsize="16px" className="box_content">
            {updates.editContent}
            {/* {comment.content} */}
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
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
`;
const InputContentColor = styled.input`
  width: 100%;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  color: #ffe3f1;
  background-color: rgba(0, 0, 0, 0);
  font-size: 16px;
  text-decoration: underline;
  :focus {
    outline: none;
  }
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

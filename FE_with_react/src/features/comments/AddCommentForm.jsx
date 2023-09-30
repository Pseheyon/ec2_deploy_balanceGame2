import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComments } from "../../redux/modules/commentASlice";
import { __getComments } from "../../redux/modules/commentASlice";
const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();

  const [comments, setComments] = useState({
    option: "",
    content: "",
  });

  const onAddCommentButtonHandler = async (event) => {
    event.preventDefault();

    if (comments.content.trim() === "") {
      alert("항목을 입력해주세요.");
    } else {
      await dispatch(__addComments({ gameId: gameId, ...comments }));

      await dispatch(__getComments(gameId));

      setComments({
        option: "",
        content: "",
      });
    }
  };

  const handleSelectChange = (event) => {
    setComments({ ...comments, option: event.target.value });
  };

  const handleInputChange = (event) => {
    setComments({ ...comments, content: event.target.value });
  };
  // console.log('response-->')
  return (
    <>
      <InputWarpper onSubmit={onAddCommentButtonHandler}>
        <InputBox>
          <SelectOptionWarpper>
            <SelectOption
              value={comments.option}
              id="option"
              onChange={handleSelectChange}
            >
              <option value="">Options ▼</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </SelectOption>
            <CommentInput
              placeholder="댓글을 달아주세요"
              value={comments.content}
              name="content"
              type="text"
              onChange={handleInputChange}
              maxLength={100}
            />
          </SelectOptionWarpper>

          <SubmitButton type="submit" onClick={onAddCommentButtonHandler}>
            SUBMIT
          </SubmitButton>
        </InputBox>
      </InputWarpper>
    </>
  );
};

export default AddCommentForm;
const InputWarpper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SelectOptionWarpper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputBox = styled.div`
  width: 70%;
  height: 120px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const SelectOption = styled.select`
  width: auto;
  background-color: #ffe3f1;
  appearance: none;
  border: 0px;
  border-radius: 40px 0px 0px 40px;
  padding: 11px 15px;
  color: #ff6db4;
  box-sizing: border-box;
`;
const CommentInput = styled.input`
  width: 100%;
  border: 0px;
  padding: 11px 11px 11px 9px;
  border-radius: 0px 40px 40px 0px;
  color: #ff6db4;
  ::placeholder {
    color: #ffe3f1;
  }
`;
const SubmitButton = styled.button`
  border-radius: 40px;
  border: 0px;
  color: #ff6db4;
  background-color: #ffe3f1;
  padding: 11px 40px;
`;

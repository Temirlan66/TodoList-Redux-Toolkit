import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeEditingTodoId, changeInputValue, completedPosts, deleteTodo } from "../../store/action";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(changeInputValue(title));
    dispatch(changeEditingTodoId(id));
    dispatch(deleteTodo(id));
  };
  return (
    <ContainerList>
      <span
        style={{
          textDecoration: `${completed ? "line-through" : ""}`,
        }}
      >
        {title}
      </span>
      <StyledContainer>
        <input
          type="checkbox"
          onChange={() => dispatch(completedPosts(id))}
        />
        <button onClick={editHandler}>Update</button>

        <button onClick={() => dispatch(deleteTodo(id))}>
          Delete
        </button>
      </StyledContainer>
    </ContainerList>
  );
};

const ContainerList = styled.div`
  margin: 0 auto;
  width: 450px;
  background-color: #d8931494;
  margin-top: 2rem;
  height: max-content;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  border-radius: 10px;

  span {
    color: white;
    font-size: 20px;
  }
`;

const StyledContainer = styled.div`
  width: 150px;

  display: flex;
  justify-content: space-between;

  button {
    width: 50px;
    background-color: #ffc800;
    border: none;
    color: white;
  }
`;
export default TodoItem;

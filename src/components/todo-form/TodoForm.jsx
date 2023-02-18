import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TodoList from "../todo-list/TodoList";
import { addTodo, changeInputValue } from "../../store/action";
const TodoForm = () => {
  const dispatch = useDispatch();
  const { inputValue } = useSelector((state) => state.todo);

  const disabled = inputValue.trim().length > 0;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title: inputValue,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <>
      <ContainerForm>
        <StyledDiv>
          <h1>Todo List</h1>
          <input
            type="text"
            onChange={(e) => dispatch(changeInputValue(e.target.value))}
            value={inputValue}
          />

          <button disabled={!disabled} onClick={onSubmitHandler}>
            Add
          </button>
        </StyledDiv>
      </ContainerForm>

      <TodoList />
    </>
  );
};

const ContainerForm = styled.div`
  margin: 0 auto;
  width: 600px;

  input {
    width: 500px;
    height: 30px;
    padding: 10px 10px;
  }

  button {
    width: 90px;
    padding: 7px 7px;
    margin-left: 5px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    color: white;
  }

  h1 {
    text-align: center;
    color: white;
    font-size: 3rem;
  }
`;

const StyledDiv = styled.div`
  margin-top: 30px;
`;

export default TodoForm;

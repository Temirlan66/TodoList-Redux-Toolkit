import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../todo-item/TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          todos={todos}
          key={todo.id}
          title={todo.title}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </>
  );
};

export default TodoList;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../auth/Auth";
import TodoForm from "../todo-form/TodoForm";

const MainLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route path="/todos" element={<TodoForm />} />
      </Routes>
    </div>
  );
};

export default MainLayout;

import TodoCard from "./components/TodoCard";
import React from "react";
import "./index.css";

function LessionOne() {
  return (
    <div>
      <h1>My todos</h1>
      <TodoCard title="Wash the dishes" />
      <TodoCard title="Vacuum the house" />
      <TodoCard title="Make your bed" />
      <TodoCard title="Do some push ups" />
    </div>
  );
}

export default LessionOne;

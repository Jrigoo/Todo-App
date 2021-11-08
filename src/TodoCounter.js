import React from "react";
import "./css/TodoCounter.css";

function TodoCounter({ todos }) {
  let todosLength = todos.length;
  let completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="header">
      <h1 className="header__title">To Do App</h1>,
      <p className="header__counter">
        Has completado {completedTodos} de {todosLength} todos
      </p>
    </div>
  );
}

export { TodoCounter };

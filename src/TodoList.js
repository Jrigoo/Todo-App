import React from "react";
import "./css/TodoList.css";
function TodoList({ children }) {
  return (
    <section className="todoList">
      <div>{children}</div>
    </section>
  );
}

export { TodoList };

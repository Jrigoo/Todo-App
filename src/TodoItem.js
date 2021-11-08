import React from "react";
import "./css/TodoItem.css";
import { BiTrash } from "react-icons/bi";

function TodoItem({ idx, todo, onComplete, onDelete }) {
  return (
    <div className="todoItem">
      <p className={`${todo.completed && "task_done"}`}>{todo.text}</p>
      <div className="todoItem_icons">
        <input
          type="checkbox"
          className="todoItem__input"
          onClick={() => {
            onComplete(idx);
          }}
        />
        <BiTrash
          className="todoItem__icon"
          onClick={() => {
            onDelete(idx);
          }}
        />
      </div>
    </div>
  );
}

export { TodoItem };

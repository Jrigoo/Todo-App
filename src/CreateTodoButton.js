import React from "react";
import "./css/CreateTodoButton.css";

function CreateTodoButton({ setModalState }) {
  return (
    <button
      className="createTodo"
      onClick={() => {
        setModalState(true);
      }}
    >
      Crear un nuevo to do
    </button>
  );
}

export { CreateTodoButton };

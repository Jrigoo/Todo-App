import React from "react";
import "./css/App.css";
import { ExitModalButton } from "./ExitModalButton";

function TodoForm({ setModalState, newTodo, setNewTodo, onAdd }) {
  const onValueChange = (event) => {
    setNewTodo(event.target.value);
  };
  const onSubmit = () => {
    onAdd({ text: newTodo, completed: false });
    setModalState(false);
    setNewTodo("");
  };

  return (
    <form className="todoForm" onSubmit={onSubmit}>
      <ExitModalButton setModalState={setModalState} />
      <h1 className="todoForm__title">To Do</h1>
      <textarea
        className="todoForm__input"
        placeholder="Inserta un nuevo To Do"
        value={newTodo}
        onChange={onValueChange}
      />
      <button className="todoForm__btn" type="submit">
        Insertar
      </button>
    </form>
  );
}

export { TodoForm };

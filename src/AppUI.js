import React from "react";
import "./css/App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";

import { TodoForm } from "./TodoForm";

import { TodoContext } from "./TodoContext";

function AppUI() {
  const {
    todos,
    loading,
    error,
    onComplete,
    onDelete,
    filteredTodos,
    searchValue,
    setSearchValue,
    modalState,
    setModalState,
    newTodo,
    setNewTodo,
    onAdd,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter todos={todos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {error && <p>Ha ocurrido un error: {error}</p>}
        {loading && <p className="cargando">Cargando...</p>}
        {!loading && !filteredTodos.length && (
          <p className="start">Crea tu primer to do!</p>
        )}

        {filteredTodos.map((todo, i) => (
          <TodoItem
            key={i}
            todo={todo}
            idx={i}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </TodoList>

      <CreateTodoButton setModalState={setModalState} />
      {modalState && (
        <Modal>
          <div className="modal">
            <TodoForm
              setModalState={setModalState}
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              onAdd={onAdd}
            />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default AppUI;

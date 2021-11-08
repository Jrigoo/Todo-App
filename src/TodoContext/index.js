import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [modalState, setModalState] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [newTodo, setNewTodo] = React.useState("");
  const { todos, setTodos, loading, error } = useLocalStorage("TODOS_V1", []);

  let filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().match(searchValue.toLowerCase())
  );

  let onComplete = (idx) => {
    let newTodos = [...todos];
    if (newTodos[idx].completed) {
      newTodos[idx].completed = false;
    } else {
      newTodos[idx].completed = true;
    }
    setTodos(newTodos);
  };

  let onDelete = (idx) => {
    let newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  let onAdd = (newTodo) => {
    let newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

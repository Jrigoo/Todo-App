import React from "react";
import "./css/TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue }) {
  const onValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="todoInput"
      placeholder="Busca entre tus to Dos"
      value={searchValue}
      onChange={onValueChange}
    />
  );
}

export { TodoSearch };

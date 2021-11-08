import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  let [items, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageTodos = localStorage.getItem(itemName);
        let parsedTodos;
        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedTodos = initialValue;
        } else {
          parsedTodos = JSON.parse(localStorageTodos);
        }

        setItem(parsedTodos);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, 2000);
  });

  function saveItem(newTodos) {
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItem(newTodos);
    } catch (err) {
      setError(err);
    }
  }

  return { todos: items, setTodos: saveItem, loading: loading, error: error };
}

export { useLocalStorage };

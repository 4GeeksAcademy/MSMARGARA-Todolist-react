import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoverItem, setHoverItem] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos(todos.concat(inputValue.trim()));
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list-container">
      <input
        id="todo-list"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        placeholder="What needs to be done?"
      />

      {todos.map((item, index) => (
        <div
          key={index}
          className="task-container"
          onMouseEnter={() => setHoverItem(index)}
          onMouseLeave={() => setHoverItem(null)}
        >
          <span>{item}</span>

          {hoverItem === index && (
            <i
              className="delete-icon"
              onClick={() => handleDeleteTodo(index)}
            >
              X
            </i>
          )}
        </div>
      ))}

      <div>
        {todos.length} {todos.length === 1 ? "item" : "items"} left
      </div>
    </div>
  );
};

export default TodoList;

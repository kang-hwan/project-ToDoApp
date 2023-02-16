import { useState } from "react";
import "./App.css";
import TodoBoard from "./Components/TodoBoard/TodoBoard";

// Main App
function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, input]);
    console.log(todoList);
    setInput("");
  };

  return (
    <div className="App">
      <h1>MODOO TODO</h1>
      <div>
        <input
          className="task-input"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="What should we complete?"
        />
        <button onClick={addItem} className="btn-submit">
          ADD
        </button>
      </div>
      <TodoBoard todoList={todoList} />
    </div>
  );
}

export default App;

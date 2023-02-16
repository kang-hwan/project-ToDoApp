import React from "react";
import TodoItem from "../TodoItem/TodoItem";

// Container for Todo List
export default function TodoBoard(props) {
  return (
    <div>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}

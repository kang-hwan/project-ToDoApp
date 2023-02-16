import React, { useEffect, useState } from "react";
import "./TodoItem.css";

export default function TodoItem(props) {
  // TODO: If completed, text-stroke, change the button icon and background color
  const [complete, setComplete] = useState(false);
  const completeTask = () => {
    setComplete(!complete);
    console.log(complete);
  };

  return (
    <div className={complete ? "todo-item-complete" : "todo-item-incomplete"}>
      <div className="item-container">
        <p>{props.item}</p>
        <div className="btn-container">
          <button className="btn-complete" onClick={completeTask}>
            {complete ? (
              <i className="fa-sharp fa-solid fa-repeat"></i>
            ) : (
              <i className="fa-solid fa-check"></i>
            )}
          </button>
          <button className="btn-delete">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

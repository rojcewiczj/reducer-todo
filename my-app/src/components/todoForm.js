import React, { useState, useReducer } from "react";

const TodoForm = (props) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  };

  return (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTaskText"
            value={newTaskText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
             props.dispatch({ type: "new_task", payload: newTaskText });
             
              setNewTaskText("");
            }}
          >
            newTask
          </button>
        </div>
    
  );
};

export default TodoForm;

import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducer";
const TodoForm = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  };

  return (
        <div>
          <input
            className="task-input"
            type="text"
            name="newTaskText"
            value={newTaskText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "new_task", title: newTaskText });
              setNewTaskText("");
            }}
          >
            newTask
          </button>
        </div>
    
  );
};

export default TodoForm;

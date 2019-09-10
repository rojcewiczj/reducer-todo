import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/titleReducer";


const ToDoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const completedTask = () =>  {
        state.filter(task => !task.completed)
    }
    return (
      <div className="ToDo-list">
        {state.map(task => (
          <ToDo key={task.id} task={task} dispatch = {dispatch} />
        ))}
        <button className="completed-btn" onClick={completedTask}>
         Completed
        </button>
      </div>
    );
  };
  
  export default ToDoList;
  
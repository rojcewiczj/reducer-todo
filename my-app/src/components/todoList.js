import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducer";
import Todo from './Todo';

const ToDoList = () => {
   
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);
    const completedTask = () =>  {
        state.filter(task => !task.completed)
    }
    console.log(state.completed)
    return (
      <div>
        {state.map(task => (
          <Todo key={task.id} task={task}  />
        ))}
        <button className="completed-btn" onClick={()=> dispatch({type: "remove_task"})}>
         Completed
        </button>
      </div>
      
    );
    
  };
  
  export default ToDoList;

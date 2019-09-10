import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducer";
import Todo from './Todo';

const ToDoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);
    const completedTask = () =>  {
        state.todoList.filter(task => !task.completed)
    }
    return (
      <div className="ToDo-list">
        {state.todoList.map(task => (
          <Todo key={task.id} task={task} dispatch = {dispatch} />
        ))}
        <button className="completed-btn" onClick={completedTask}>
         Completed
        </button>
      </div>
    );
  };
  
  export default ToDoList;
  
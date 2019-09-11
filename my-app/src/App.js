import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import './App.css';
import { initialState, todoReducer } from './reducers/reducer'



function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  return (
<div className="App">
   <div className="header">
      <h1> Hello </h1> 
       <h2>Welcome to your reducer Todo App!</h2>
       <TodoForm dispatch = {dispatch}  />
    </div>
  

        <TodoList state={state} dispatch ={dispatch} />

</div>
  );
}

export default App;

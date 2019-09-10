import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import './App.css';




function App() {
  return (
<div className="App">
   <div className="header">
      <h1> Hello </h1> 
       <h2>Welcome to your reducer Todo App!</h2>
       <TodoForm  />
    </div>
  

        <TodoList  />

</div>
  );
}

export default App;

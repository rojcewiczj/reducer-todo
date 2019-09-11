import React from "react";
import Todo from './Todo';

const ToDoList = (props) => {
   console.log(props.dispatch)

    const completedTask = () =>  {
        props.state.filter(task => !task.completed)
    }
    return (
      <div>
        {props.state.map(task => (
          <Todo key={task.id} task={task} dispatch={props.dispatch} />
        ))}
        
        <button className="completed-btn"  onClick={() => 
             props.dispatch({ type: "remove_task" })}>

         Completed
        </button>
      </div>
    );
  
  };
  
  export default ToDoList;
  
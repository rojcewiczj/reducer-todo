import React, {useReducer} from "react";


const Todo = props => {

    console.log(props.task.id)
  return (
    <div
      className={`task${props.task.completed ? ' completed' : ''}`}
      onClick={() => props.dispatch ({type: "toggle_completed", payload: props.task.id })}
     
    >
      <p>{props.task.title}</p>
    </div>
  ); 
};
export default Todo;


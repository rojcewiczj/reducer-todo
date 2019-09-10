import React, {useReducer} from "react";
import { initialState, todoReducer } from "../reducers/reducer";

const Todo = props => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div
      className={`task${props.completed ? ' completed' : ''}`}
      onClick={() => dispatch ({type: "toggle_completed", payload: props.task.id} )}
     
    >
      <p>{props.task.title}</p>
    </div>
  ); 
};
export default Todo;


import React from "react";

const ToDo = props => {
  return (
    <div
      className={`task${props.task.completed ? ' completed' : ''}`}
      onClick={() => props.dispatch({type: "toggle_editing"})}
    >
      <p>{props.task.title}</p>
    </div>
  );
};
export default ToDo;


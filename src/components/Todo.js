import React from "react";
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

const Todo = (props) => {
    function ToggleTodo (id) {
        props.toggleTodo(id);
    }
    const { todo } = props;
  return (
    <li
      className={`todo-item  ${todo.completed? "completed" : "" }`}
      onClick={()=>ToggleTodo(todo.id)/** dispatches action to toggle todo */}
    >
      {todo && todo.completed ? "👌" : "👋"} {todo.content}
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);

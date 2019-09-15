import React from "react";
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import Todo from './Todo';


const TodoList = ({todos}) => {
  return (
    <div className="form-group text-center">
      <h3 className="text-left">Todo List</h3>
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
          : "🎊No Todos, Yay!🎊"}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);

    return { todos }
  }

export default connect(mapStateToProps)(TodoList);

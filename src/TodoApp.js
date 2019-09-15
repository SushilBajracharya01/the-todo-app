import React from 'react';
import { connect } from 'react-redux';
import './TodoApp.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';



function TodoApp(props) {
  return (
    <div className="todo-app container">
      <div className="todo-header py-3 pl-4">
        <h1>THE TODO APP</h1>
      </div>
      <div className="todo-body py-4 pl-5">
        
        <AddTodo />
        <TodoList />

      </div>
      <VisibilityFilters />

    </div>
  );
}



export default connect()(TodoApp);

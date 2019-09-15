import React from "react";
import {connect} from 'react-redux';

import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleChange (e) {
        this.setState({
            todo: e.target.value
        });
        
    }

    handleAddTodo () {
        //dispatches action to add todo
        this.props.addTodo(this.state.todo);
        //sets state back to empty string
        this.setState({todo: ''})
    }
  render() {

    return (
      <div className="form-group text-center">
        <h3 className="text-left">Add Todos</h3>
        <input
          type="text"
          className="form-control inputTodo_txt"
          onChange={this.handleChange}
          value={this.state.todo}
          placeholder="Enter your Todo item"
        />
        <input
          type="button"
          value="Add TODO"
          className="addTodo_btn btn my-1"
          onClick={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);

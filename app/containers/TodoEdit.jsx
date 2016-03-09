import React,{ Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/todos';
import About from '../components/About';
import TodoEditComponent from '../components/TodoEdit';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

class TodoEdit extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }
  render() {
    const { todos, actions } = this.props
    return <TodoEditComponent todos={todos} addTodo={actions.addTodo} />
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoEdit)
import React, { Component, PropTypes } from 'react'

export default class TodoEdit extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired
    }
    handleTextChange(){
        const { addTodo } = this.props
        const { text } = this.refs
        addTodo(text.value)
    }
    render(){
        const { todos } = this.props
        return <div>
            <input ref="text" type="text" onChange={::this.handleTextChange}/>
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        {todo.text} - {todo.completed.toString()} - {todo.id}
                    </li>                                     
                )}
             </ul>
        </div> 
        
    }
}

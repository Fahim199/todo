import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import Add from "./add"
import "./style.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    saveNewTodo=(enteredTodo)=>{
        const newTodos={
            ...enteredTodo,
            id:Math.random().toString(),
            completed:false
        };
        
        this.setState(prevState => {
            const updatedTodos = [
                ...prevState.todos,
                newTodos
            ]
            return {
                todos: updatedTodos
            }
        })
    }
    handledel=(id)=>{
        const updatedTodos= this.state.todos.filter((todo)=>todo.id!==id);
        this.setState({todos:updatedTodos})
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}
        handledel={this.handledel}/>)
        
        return (
            <div className="todo-list">
                <Add onSaveTodo={this.saveNewTodo}/>
                {todoItems}
            </div>
        )    
    }
}

export default App
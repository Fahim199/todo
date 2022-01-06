import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import Add from "./add"
import "./style.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData,
            optionsState:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePriority = this.handlePriority.bind(this)
    }
    handleselect=(event)=>{
        if (event.target.value === "date") {
            this.setState(prevState => {
                const updatedTodos = prevState.todos.sort(function(a, b) {
                    var c = new Date(a.date);
                    var d = new Date(b.date);
                    return c-d;            
                })
                return {
                    todos: updatedTodos,
                    optionsState:event.target.value
                }
            
            })
        }else if(event.target.value === "priority"){
            this.setState(prevState => {
                const updatedTodos = prevState.todos.sort(function(a, b) {
                    return b.priority-a.priority;            
                })
                return {
                    todos: updatedTodos,
                    optionsState:event.target.value
                }
            
            })
        }else{

            this.setState(prevState=>{
                return{
                    todos:prevState.todos,
                    optionsState:event.target.value
                }
                
            })
        }
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
                todos: updatedTodos,
                optionsState: prevState.optionsState
            }
        })
    }
    handlePriority(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.priority = !todo.priority
                }
                return todo
            })
            return {
                todos: updatedTodos,
                optionsState: prevState.optionsState
            }
        })
    }
    saveNewTodo=(enteredTodo)=>{
        const newTodos={
            ...enteredTodo,
            id:Math.random().toString(),
            completed:false,
            priority: false
        };
        
        this.setState(prevState => {
            const updatedTodos = [
                ...prevState.todos,
                newTodos
            ]
            return{
                todos: updatedTodos,
                optionsState:''
            }
        })
    }
    handledel=(id)=>{
        const updatedTodos= this.state.todos.filter((todo)=>todo.id!==id);
        this.setState(prevState => {
            return{
                todos:updatedTodos,
                optionsState:prevState.optionsState
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}
        handledel={this.handledel} handlePriority={this.handlePriority}/>)
        
        return (
            <div>
                
                <div className="todo-list">
                    <div className="upperP">
                        <Add  onSaveTodo={this.saveNewTodo}/>
                        
                        <select className="sortList"value= {this.state.optionsState} onChange={this.handleselect}>
                            <option value=''>Sort by</option>
                            <option value='date'>By Date</option>
                            <option value='priority'>By Priority</option>
                        </select>
                    </div>
                    
                    {todoItems}
                </div>
            </div>
            
        )    
    }
}

export default App
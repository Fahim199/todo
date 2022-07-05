import React from "react"
import TodoItem from "./TodoItem"
// import todosData from "./todosData"
import Add from "./add"
import "./style.css"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            optionsState:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePriority = this.handlePriority.bind(this)
        this.loadTodos = this.loadTodos.bind(this)
        this.loadTodos();
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
    
    loadTodos = () =>{
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(todos =>
            {this.setState({todos: todos})})
        
        
    }
    
    handleChange(id) {
        fetch('http://localhost:3000/complete',
            {
                method:'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: id  
                })
            })
            .then(response => response.json())
            .then(todos =>
                {this.setState({todos: todos})})
    }
    
    handlePriority(id){
        fetch('http://localhost:3000/priority',
            {
                method:'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: id  
                })
            })
            .then(response => response.json())
            .then(todos =>
                {this.setState({todos: todos})})
    }


    saveNewTodo=(enteredTodo)=>{
        const newTodos={
            ...enteredTodo,
            completed:false,
            priority: false
        };
        fetch('http://localhost:3000/enter',
            {
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    text: newTodos.text,
                    date: newTodos.date,
                    completed: newTodos.completed,
                    priority: newTodos.priority
                })
            })
            .then(response => response.json())
            .then(todos =>
                {this.setState({todos: todos})})
        
    }
    handledel=(id)=>{
        fetch('http://localhost:3000/delete',
            {
                method:'DELETE',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: id  
                })
            })
            .then(response => response.json())
            .then(todos =>
                {this.setState({todos: todos})})
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
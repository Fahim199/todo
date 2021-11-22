import React,{useState} from "react"
const Add =(props)=>{
    const [enteredTodo,setEnteredTodo]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const submitHandler=(event)=>{
        event.preventDefault();
        const newTodo ={
            text:enteredTodo
        };
        props.onSaveTodo(newTodo);
        setEnteredTodo('');
    }
    const todoChangeHandler=(event)=>{
        setEnteredTodo(event.target.value);
    }
const DateChange
    return(
        <form onSubmit={submitHandler}>
            <input type='text'
                placeholder='Add a to-do'
                value ={enteredTodo}
                onChange={todoChangeHandler} />
            
            <button type='submit'> + </button>
        </form>
        
        
    );
}
export default Add;
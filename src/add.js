import React,{useState} from "react"
const Add =(props)=>{
    const d= new Date();
    const m= d.getMonth()+1;
    const a= d.getFullYear()+'-'+m+'-'+d.getDate();

    const [enteredTodo,setEnteredTodo]=useState('');
    const [enteredDate,setEnteredDate]=useState(a);
    const submitHandler=(event)=>{
        event.preventDefault();
        const newTodo ={
            text:enteredTodo,
            date: new Date(`${enteredDate} 00:00`)
        };
        props.onSaveTodo(newTodo);
        setEnteredTodo('');
        setEnteredDate(a);
    }
    const todoChangeHandler=(event)=>{
        setEnteredTodo(event.target.value);
    }
    const DateChangeHandler= (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    }
    return(
        <form  onSubmit={submitHandler}>
            <input type='text'
                placeholder='Add a to-do'
                value ={enteredTodo}
                onChange={todoChangeHandler} required/>
            <input 
                type='date'
                value={enteredDate}
                min='2021-01-01'
                onChange={DateChangeHandler}/>           
            <button type='submit'> + </button>
        </form>
        
        
    );
}
export default Add;
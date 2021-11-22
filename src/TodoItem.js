import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (
        
        <div className="todo-item">
            
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
            <input className="delete" type="submit" value="delete" onClick={()=>props.handledel(props.item.id)}/>
         </div>
        
    )
}

export default TodoItem
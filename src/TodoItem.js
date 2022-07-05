import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'


function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
        
    }
    const on= {
        color: "#f2e35c",
        height:"32px",
        fontSize:"20px",
        cursor: "pointer"
      }
    const off={
        color: "#ccc",
        cursor: "pointer"
      }
    const date= new Date(props.item.date);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
    
    return (
        
        <div className="todo-item">
            <div className="todo-item_description">
                
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)}
                /> 
                <h5  style={props.item.completed ? completedStyle: null}>{props.item.text}</h5>

            </div>
            
            <div>
                <span style={props.item.priority ? on: off} onClick={()=>props.handlePriority(props.item.id)}>&#9733;</span>
                <FontAwesomeIcon icon={faTrashAlt} style={{cursor : "pointer"}} className="delete" type="submit" value="delete" onClick={()=>props.handledel(props.item.id)}/>            

            </div>
            <div className='todo-date'>
                <div className='todo-date__month'>{month}</div>
                <div className='todo-date__year'>{year}</div>
                <div className='todo-date__day'>{day}</div>
            </div>
                        
         </div>
        
    )
}

export default TodoItem
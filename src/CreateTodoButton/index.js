import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    return (
        <button 
        className="CreateTodoButton" 
        onClick={
            (event) => {
                console.log("Hubo un click")
                console.log(event);
                console.log(event.target)
            }
        }>
        + 
        </button>
    );
}

export {CreateTodoButton};
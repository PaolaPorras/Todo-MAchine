import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';


function TodoCounter({}){
   const { 
    completedTodos,
    totalTodos, } = React.useContext(TodoContext)
    return(
        <div>
            <h1 className="TodoCounter">Bienvenido a tus ToDos</h1>
            <h2 className="TodoCounter-completed"> Has completado {completedTodos} de {totalTodos}</h2>
        </div>
    );
}

export {TodoCounter};
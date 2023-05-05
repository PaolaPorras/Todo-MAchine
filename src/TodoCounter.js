import React from 'react';
import './style/TodoCounter.css'

function TodoCounter({ total, completed}){
    return(
        <div>
            <h1 className="TodoCounter">Bienvenido a tus ToDos</h1>
            <h2 className="TodoCounter-completed"> Has completado {completed} de {total}</h2>
        </div>
    );
}

export {TodoCounter};
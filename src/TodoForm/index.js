import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Escribe tu todo" />
            <div className="TodoForm">
                <button type="" className="TodoForm-button--cancel">Cancelar</button>
                <button type="" className="TodoForm-button--add">Añadir</button>
            </div>
             
        </form>
    )
}

export { TodoForm };
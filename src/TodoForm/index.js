import React from 'react';
import {TodoContext} from '../TodoContext'
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Escribe tu todo"
            value={newTodoValue}
            onChange={onChange} required/>

            <div className="TodoForm">
                <button type="" className="TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="" className="TodoForm-button--add">Añadir</button>
            </div>   
        </form>
    )
}

export { TodoForm };
import React from 'react';
import './style/TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon />

            <p className={`TodoItem-p$props.complete && "TodoItem-p--complete"}`}>
                {props.text}
                </p>
            <DeleteIcon />
            </li> 
    );
} 

export {TodoItem};
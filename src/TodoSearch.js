import React from 'react';
import './style/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
    

    return(
        <input 
        className="TodoSearch" 
        placeholder="Buscar" 
        value={searchValue}
        onChange={(event)=> {
            setSearchValue(event.target.value);
        }}/>
    );
}
export {TodoSearch};
import React from 'react';
import { TodoCounter } from './TodoCounter' ;
import { TodoSearch } from './TodoSearch' ;
import { TodoList } from './TodoList' ;
import { TodoItem } from './TodoItem' ;
import { CreateTodoButton } from './CreateTodoButton'
//import logo from './logo.svg';
//import './App.css';

const defaultTodos = [ 
  {text:"Tarea 1", completed: true},
  {text:"Resumen", completed: true},
  {text:"Proyecto", completed: false},
];

function App() {
  const[todos, setTodos] = React.useState(defaultTodos);
  const[searchValue, setSearchValue] = React.useState('');

  //Cambiar estado de cuantos ToDos realmente se han completado
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Filtros de Todos por la busqueda
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase(); 

      return todoText.includes(searchText);
    })
  
  console.log('Los usuarios buscan ToDos de ' + searchValue);

  return ( 
    //solo soporta el envio de un componente, pide el envio de una etiqueta por componente
    <React.Fragment> 
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}/>
      
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}/>
        ))}
        
        </TodoList>

      <CreateTodoButton/> 
    </React.Fragment>
  );
}

export default App;

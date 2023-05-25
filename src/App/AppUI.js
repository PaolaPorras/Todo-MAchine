import React from 'react';
import { TodoCounter } from '../TodoCounter' ;
import { TodoSearch } from '../TodoSearch' ;
import { TodoList } from '../TodoList' ;
import { TodoItem } from '../TodoItem' ;
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading} from '../TodosLoading' ;
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos' ;
import { TodoContext } from '../TodoContext';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext)
  return ( 
    //solo soporta el envio de un componente, pide el envio de una etiqueta por componente
    <React.Fragment> 
     <TodoCounter
        // completed={completedTodos}
        // total={totalTodos} 
      />
      <TodoSearch
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />


        <TodoList>
          {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
          )}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length == 0) &&<EmptyTodos/>}

          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            
          ))}
        
        </TodoList>

      <CreateTodoButton/> 
    </React.Fragment>
  );
}


export {AppUI};
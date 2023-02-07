import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  // const [state,dispatch] = useReducer(todoReducer,{/* Initial todo state array, could be an array for storing indivial todo objects */})
  const [state,dispatch] = useReducer(todoReducer,[]);
  
  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {state.map(todo=>{
        return <Todo title={todo.title} key={todo.id} dispatch={dispatch} id={todo.id}/>
      })}
     {/* Render list of Todo Components here */}
    </div>
  )
}


export default App;

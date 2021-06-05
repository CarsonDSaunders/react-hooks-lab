import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List';

function App() {
  const [ todos, setTodos ] = useState([])

  function addTodo(item) {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      <List list={todos} />
    </div>
  );
}

export default App;

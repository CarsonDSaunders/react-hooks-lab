import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import ListItem from './ListItem';
import axios from 'axios'

function App() {
  const [ list, setList ] = useState([])

  useEffect(() => {
    axios.get('https://www.dnd5eapi.co/api/spells')
    .then((res) => {
      setList(res.data.results);
    })
  }, [])

  return (
    <div className="App">
      <h1>DnD 5e Spell Reference</h1>
      <div>
        {list.map((ele, i) => {
          return <ListItem item={ele} key={i} />
        })}
      </div>
    </div>
  );
}

export default App;

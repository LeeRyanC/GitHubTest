import React, {useState} from 'react'
import './App.css';
import TodoForm from './components/TodoForm'

function App() {

  const [list, setList] = useState([])

  return (
    <div className="App">
      <TodoForm list={list} setList={setList}/>
    </div>
  );
}

export default App;

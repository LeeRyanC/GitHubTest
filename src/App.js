import React, {useState} from 'react';
import './App.css';

import TodoDisplay from './components/TodoDisplay';
import TodoForm from './components/TodoForm';

function App() {

  const [list, setList] = useState([])

  return (
    <div className="App">
      {list.map((task, i) =>
        <TodoDisplay task={task} setList={setList} index={i} list={list}/>
      )}
      <TodoForm list={list} setList={setList}/>
    </div>
  );
}

export default App;


//sorry not really any css yet

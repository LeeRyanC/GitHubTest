import React from 'react'

const TodoDisplay = ({list, setList, task, index}) => {

    const deleteTask = (e) => {
        setList(list.filter(task => list.indexOf(task) !== index));
    }

    const checkHandler = (e) => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list])
    }

    return(
        <div>
            <h3>{task.name}</h3>
            <input type="checkbox" onChange={checkHandler} checked={task.isComplete}/>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}

export default TodoDisplay;
import React, {useState} from 'react'

const TodoForm = ({list, setList}) => {

    let task = {
        name: "",
        isComplete: false
    }
    
    const clickHandler = (e) => {
        e.preventDefault();
        setList([...list, task])
    }

    const handleTask = (e) => {
        task.name = e.target.value
    }


    return (
        <div>
            <form onSubmit={clickHandler}>
                <input type="text" onChange={handleTask} name="task" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoForm;
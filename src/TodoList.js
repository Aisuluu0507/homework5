import React from 'react';

function TaskList({ tasks, editButton, deleteButton }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button  className='deleteButton' onClick={() => deleteButton(index)}>Delete</button>
                    <button className='editButton' onClick={() => editButton(index)}>Edit</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
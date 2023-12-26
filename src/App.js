import React from "react";
import {useState} from "react";
import TodoList from './TodoList';
function App() {
  const [apps, setApps] = useState([]);
  const [newApp, setNewApp] = useState('');
  const [editingButton, setEditingButton] = useState(null);

  const addButton = () => {
    if (newApp.trim() !== '') {
      if (editingButton !== null) {

        const updatedTasks = [...apps];
        updatedTasks[editingButton] = newApp;
        setApps(updatedTasks);
        setEditingButton(null);
      } else {
        setApps([...apps, newApp]);
      }
      setNewApp('');
    }
  };

  const editButton = (index) => {
    setNewApp(apps[index]);
    setEditingButton(index);
  };

  const deleteButton = (index) => {
    const updatedTasks = [...apps];
    updatedTasks.splice(index, 1);
    setApps(updatedTasks);
    setEditingButton(null);
  };

  return (
      <div className='block'>
        <h1>Todo List</h1>
        <input
            type="text"
            value={newApp}
            onChange={(e) => setNewApp(e.target.value)}
            placeholder="Do..."
        />
        <button onClick={addButton}>{editingButton !== null ? 'Edit' : 'Add'}</button>
        <TodoList tasks={apps} editButton={editButton} deleteButton={deleteButton} />
      </div>
  );
}

export default App;
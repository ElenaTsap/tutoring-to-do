import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(taskName);

    const url = 'http://localhost:8080/tasks/new'

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(taskName)
    }

    fetch(url, options)
    .then(response => response.json().then(res => {
      if (res.errors) {
        alert(`${res.message}`)
      } else {
        setTasks([...tasks, res]);
      }
    })).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>My to-do list</h1>

      <form onSubmit = {submitHandler}>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default App;

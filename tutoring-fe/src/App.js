import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState({'taskName': ''});

  const addTask = (e) => {
/*     let singleTask = {
        ...taskName
    }
    singleTask.taskName = e.target.value; */
    setTaskName(e.target.value);
}

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
        <input type="text" value={taskName.taskName} onChange={(e) => addTask(e)}/>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default App;

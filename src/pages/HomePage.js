import { useState } from "react";
import "../styles/App.css";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import Navbar from "../components/Navbar";


function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [CompletedTask, setCompletedTask] = useState([]);

  function addTask(task_header, task_desk) {
    setTasks([...tasks, { task_header, task_desk }]);
  }

  function removeTask(i) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(i, 1);
    setTasks(updatedTasks);
  }

  function addCompletedTask(task_header, task_desk) {
    setCompletedTask([...CompletedTask, { task_header, task_desk }]);
  }

  return (
    <>
        <Navbar />
        <h1>Hello</h1>
        <NewTask addTask={addTask} />
        <p>------------------------</p>
        {tasks.map((task, index) => (
            <Task
            taskId={index}
            taskHeader={task.task_header}
            taskDesk={task.task_desk}
            removeTask={removeTask}
            addCompletedTask={addCompletedTask}
            taskStatus="in_process"
            />
        ))}
        <p>------------------------</p>
        <p>Выполненные задания</p>
        {CompletedTask.map((task, index) => (
            <Task
            taskId={index}
            taskHeader={task.task_header}
            taskDesk={task.task_desk}
            taskStatus="completed"
            />
        ))}
    </>
  );
}

export default HomePage;

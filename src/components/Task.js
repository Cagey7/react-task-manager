import '../styles/Task.css';

function Task({ taskHeader, taskDesk, taskId, removeTask, addCompletedTask, taskStatus }) {

  function addCompletedTaskHandler () {
    addCompletedTask(taskHeader, taskDesk);
    removeTask(taskId);
  }

  return (
      <div>
        <h3>{taskHeader}</h3>
        <p>{taskDesk}</p>
        {taskStatus === "in_process" ? (
          <div>
            <button onClick={addCompletedTaskHandler}>Выполнено</button>
            <button onClick={() => removeTask(taskId)}>Удалить</button>
          </div>
        ) : (
          ""
        )}

        <p>------------------------</p>
      </div>
    );
  }
  
  export default Task;
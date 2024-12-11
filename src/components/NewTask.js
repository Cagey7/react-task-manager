import { useState } from 'react';
import '../styles/NewTask.css';


function NewTask({ addTask }) {
	const [inputHeader, setInputHeader] = useState("");
	const [inputDesk, setInputDesk] = useState("");
	const [error, setError] = useState(false);

	function addTaskHandler () {
		if (inputHeader && inputDesk) {
			addTask(inputDesk, inputHeader);
			setInputHeader("");
			setInputDesk("");
			setError(false);
		} else {
			setError(true);
		}

	}

  	function inputKeyPress(event) {
		if (event.key === "Enter") {
			addTaskHandler();
		}
  	}

  return (
	<div class="main-new-task-container">
		<h1>Введите новое задание</h1>
		<p class="task-header-name">Заголовок задания</p>
		<input class="task-header-input" onChange={e => setInputHeader(e.target.value)} onKeyDown={inputKeyPress} value={inputHeader}/>
		<p class="task-desc-name">Описание задания</p>
		<textarea class="task-desc-input" onChange={e => setInputDesk(e.target.value)} onKeyDown={inputKeyPress} value={inputDesk}/>
		<button onClick={addTaskHandler}>Добавить</button>
		{error ? <p>Введите данные о задании</p> : <p></p>}
	</div>

  	);
}

export default NewTask;

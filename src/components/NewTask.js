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
    <>
        <h1>Введите новое задание</h1>
		<p>Заголовок задания</p>
        <input onChange={e => setInputHeader(e.target.value)} onKeyDown={inputKeyPress} value={inputHeader}/>
		<p>Описание задания</p>
        <input onChange={e => setInputDesk(e.target.value)} onKeyDown={inputKeyPress} value={inputDesk}/>
		<br></br>
        <button onClick={addTaskHandler}>Добавить</button>
		{error ? <p>Введите данные о задании</p> : <p></p>}
    </>
  	);
}

export default NewTask;

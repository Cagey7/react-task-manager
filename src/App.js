import React from 'react';
import './styles/App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
    	<Navbar />
		<main class="container">
			<Outlet />
		</main>
    </>
  );
};

export default App;

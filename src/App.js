import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
	return (
		<div className="App">
			<Button increment={1} />
			<Button increment={10} />
			<Button increment={100} />
			<Button increment={1000} />
		</div>
	);
}

export default App;

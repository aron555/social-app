import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LastDialogs from './components/lastDialogs/LastDialogs';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import './App.css';

function App(props) {
	return (
		<div className="App">
			<Header text='Site'/>
			<aside className="aside">
				<Nav/>
				<LastDialogs/>
			</aside>
			<div className="content">
			</div>
		</div>
	);
}

export default App;

import React from 'react'
// import {Route} from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import LastDialogs from './components/lastDialogs/LastDialogs'
// import Profile from './components/profile/Profile'
// import Dialogs from './components/dialogs/Dialogs'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

import DoneAllIcon from '@material-ui/icons/DoneAll';


function App(props) {
	return (
		<div className="App">
			<Header text='Site'/>
			<aside className="aside">
				<Nav/>
				<LastDialogs/>
			</aside>
			<div className="content">
				<button className='btn btn-primary'><DoneAllIcon/> Примари <FontAwesomeIcon icon={faChevronDown}/>
				</button>
			</div>
		</div>
	);
}

export default App;

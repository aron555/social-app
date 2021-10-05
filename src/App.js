import React from 'react'
// import {Route} from 'react-router-dom';


import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
import ChatSidebar from "./components/chatSidebar/ChatSidebar";
import Middle from "./components/middle/Middle";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LastDialogs from './components/lastDialogs/LastDialogs';
// import Profile from './components/profile/Profile';
// import Dialogs from './components/dialogs/Dialogs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


function App(props) {
	return (
		<div className="App">
			<div className="main-wrapper">
				<div className="content main_content">

					<SidebarMenu/>

					<ChatSidebar/>

					<Middle/>

					<RightSidebar/>

				</div>
			</div>
			<div>
				<Header text='Site'/>
				<aside className="aside">
					<Nav/>
					<LastDialogs/>
				</aside>
			</div>
		</div>
	);
}

export default App;

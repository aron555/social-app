import React from 'react'
// import {Route} from 'react-router-dom';


import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
import ChatSidebar from "./components/chatSidebar/ChatSidebar";
import Middle from "./components/middle/Middle";
import RightSidebar from "./components/rightSidebar/RightSidebar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
		</div>
	);
}

export default App;

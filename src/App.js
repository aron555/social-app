import React from 'react'

import SidebarMenu from "./components/sidebarMenu/SidebarMenu";

import Chats from "./components/chats/Chats";
import Groups from "./components/groups/Groups";
import Status from "./components/status/Status";
import Calls from "./components/calls/Calls";
import Settings from "./components/settings/Setttings";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import MessageIcon from '@material-ui/icons/esm/Message';
import GroupIcon from '@material-ui/icons/esm/Group';
import LibraryBooksIcon from '@material-ui/icons/esm/LibraryBooks';
import CallIcon from '@material-ui/icons/esm/Call';
import SettingsIcon from '@material-ui/icons/esm/Settings';

const routes = [
	{
		name: 'Чаты',
		icon: <MessageIcon/>,
		path: "/",
		exact: true,
		component: () => <Chats/>,
	},
	{
		name: 'Группы',
		icon: <GroupIcon/>,
		path: "/groups",
		component: () => <Groups/>,
	},
	{
		name: 'Статус',
		icon: <LibraryBooksIcon/>,
		path: "/status",
		component: () => <Status/>,
	},
	{
		name: 'Звонки',
		icon: <CallIcon/>,
		path: "/audio-call",
		component: () => <Calls/>,
	},
	{
		name: 'Настройки',
		icon: <SettingsIcon/>,
		path: "/settings",
		component: () => <Settings/>,
	}
];

export default function App() {
	return (
		<Router>
			<div className="App">
				<div className="main-wrapper">
					<div className="content main_content">
						<SidebarMenu routes={routes}/>

						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={<route.component/>}
								/>
							))}
						</Switch>

					</div>
				</div>
			</div>
		</Router>
	);
}
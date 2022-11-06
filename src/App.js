import React from 'react'

import SidebarMenu from './components/sidebarMenu/SidebarMenu';

import Chats from './components/chats/Chats';
import Groups from './components/groups/Groups';
import Status from './components/status/Status';
import Calls from './components/calls/Calls';
import Settings from './components/settings/Settings';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import MessageIcon from '@material-ui/icons/esm/Message';
import GroupIcon from '@material-ui/icons/esm/Group';
import LibraryBooksIcon from '@material-ui/icons/esm/LibraryBooks';
import CallIcon from '@material-ui/icons/esm/Call';
import SettingsIcon from '@material-ui/icons/esm/Settings';


export default function App(props) {
    const pathCustom = '';
    // const pathCustom = '/reactchatapp';

    const routes = [
        {
            name: 'Чаты',
            icon: <MessageIcon/>,
            path: pathCustom + '/',
            exact: true,
            component: () => <Chats
                users={props.state.users}
                messages={props.state.messages}
                chats={props.state.chats}
                onlineUsers={props.state.onlineUsers}
                recentChats={props.state.recentChats}
                addPost={props.addPost}
            />,
        },
        {
            name: 'Группы',
            icon: <GroupIcon/>,
            path: pathCustom + '/groups',
            component: () => <Groups
                users={props.state.users}
                messages={props.state.messages}
                chats={props.state.chats}
            />,
        },
        {
            name: 'Статус',
            icon: <LibraryBooksIcon/>,
            path: pathCustom + '/status',
            component: () => <Status/>,
        },
        {
            name: 'Звонки',
            icon: <CallIcon/>,
            path: pathCustom + '/audio-call',
            component: () => <Calls/>,
        },
        {
            name: 'Настройки',
            icon: <SettingsIcon/>,
            path: pathCustom + '/settings',
            component: () => <Settings/>,
        }
    ];
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
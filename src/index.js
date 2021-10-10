import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

ReactDOM.render(
	<React.StrictMode>
		<App users={state.users} messages={state.messages} chats={state.chats} onlineUsers={state.onlineUsers}
			 recentChats={state.recentChats}/>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

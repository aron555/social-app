import React from "react";
import ChatSidebar from "./chatSidebar/ChatSidebar";
import Middle from "./middle/Middle";
import RightSidebar from "./rightSidebar/RightSidebar";


export default function Chats(props) {
	return (
		<React.Fragment>
			<ChatSidebar onlineUsers={props.onlineUsers} recentChats={props.recentChats}/>
			<Middle users={props.users} messages={props.messages} chats={props.chats}/>
			<RightSidebar/>
		</React.Fragment>
	)
}
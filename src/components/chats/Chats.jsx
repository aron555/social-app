import React from "react";
import ChatSidebar from "./chatSidebar/ChatSidebar";
import Middle from "./middle/Middle";
import RightSidebar from "./rightSidebar/RightSidebar";


export default function Chats() {
	return (
		<React.Fragment>
			<ChatSidebar/>
			<Middle/>
			<RightSidebar/>
		</React.Fragment>
	)
}
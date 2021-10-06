import React from "react";
import "./ChatSidebar.css";

import OnlineContacts from "./onlineContacts/OnlineContacts";

import GroupIcon from '@material-ui/icons/esm/Group';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import SidebarBody from "./sidebarBody/SidebarBody";
import SearchChat from "./searchChat/SearchChat";


export default function ChatSidebar() {
	return (
		<div className="sidebar-group left-sidebar chat_sidebar">
			<div className="slimScrollDiv">
				<div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
					<div className="slimScrollDiv">
						<div className="slimscroll">
							<div className="left-chat-title d-flex justify-content-between align-items-center">
								<div className="chat-title">
									<h4>ЧАТЫ</h4>
								</div>
								<div className="add-section">
									<ul>
										<li>
											<a href="/template2/chat/group">
												<GroupIcon/>
											</a>
										</li>
										<li>
											<a data-toggle="modal" data-target="#add-user">
												<FontAwesomeIcon icon={faPlus}/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<SearchChat/>
							<OnlineContacts/>
							<SidebarBody/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
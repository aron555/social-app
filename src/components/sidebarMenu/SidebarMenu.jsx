import React from "react";
import "./SidebarMenu.css";

import MessageIcon from '@material-ui/icons/esm/Message';
import GroupIcon from '@material-ui/icons/esm/Group';
import LibraryBooksIcon from '@material-ui/icons/esm/LibraryBooks';
import CallIcon from '@material-ui/icons/esm/Call';
import SettingsIcon from '@material-ui/icons/esm/Settings';
import GroupAddIcon from '@material-ui/icons/esm/GroupAdd';
import FlagIcon from "@material-ui/icons/esm/Flag";
import PowerSettingsNewIcon from "@material-ui/icons/esm/PowerSettingsNew";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faMoon, faPlus, faIdCardAlt} from '@fortawesome/free-solid-svg-icons';


export default function SidebarMenu() {
	return (
		<div className="sidebarMenu">
			<div className="logo-col">
				<a href="/template2/chat/chat-main">
					<img src="assets/img/logo.png" alt=""/>
				</a>
			</div>
			<div className="menus-col">
				<div className="chat-menus">
					<ul>
						<li>
							<a
								className="chat-unread blue"
								href="/template2/chat/chat-main"
							>
								<MessageIcon/><span>Чаты</span>
							</a>
						</li>
						<li>
							<a
								className="chat-unread pink"
								href=""
							>
								<GroupIcon/><span>Группы</span>
							</a>
						</li>
						<li>
							<a href="/template2/chat/status">
								<LibraryBooksIcon/><span>Статус</span>
							</a>
						</li>
						<li>
							<a href="/template2/chat/audio-call">
								<CallIcon/><span>Звонки</span>
							</a>
						</li>
						<li>
							<a href="/template2/chat/settings">
								<SettingsIcon/><span>Настройки</span>
							</a>
						</li>
					</ul>
				</div>
				<div className="bottom-menus">
					<ul>
						<li>
							<a data-toggle="modal" data-target="#add-new-group">
								<GroupAddIcon/><span>Добавить группу</span>
							</a>
						</li>
						<li>
							<a data-toggle="modal" data-target="#add-contact" className="add-contacts-btn">
								<FontAwesomeIcon icon={faPlus}/><span>Добавить контакт</span>
							</a>
						</li>
						<li>
							<a id="dark-mode-toggle" className="dark-mode-toggle">
								<FontAwesomeIcon icon={faMoon}/>
								<span>Сменить режим</span>
							</a>
						</li>
						<li>
							<a data-toggle="dropdown" className="chat-profile-icon">
								<img src="assets/img/avatar/avatar-13.jpg" alt=""/>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<a className="dropdown-item dream_profile_menu">
									Редактировать профиль
									<span className="edit-profile-icon">
										<FontAwesomeIcon icon={faEdit}/>
									</span>
								</a>
								<a
									className="dropdown-item">Profile
									<span className="profile-icon-col">
										<FontAwesomeIcon icon={faIdCardAlt}/>
									</span>
								</a>
								<a className="dropdown-item" href="/template2/chat/settings">
									Настройки
									<SettingsIcon/>
								</a>
								<a href="/template2/chat/archived">В архиве
									<FlagIcon/>
								</a>
								<a className="dropdown-item" href="/template2/chat/login-email">
									Выход
									<PowerSettingsNewIcon/>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
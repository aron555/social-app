import React from 'react';
import './SidebarMenu.css';

import SettingsIcon from '@material-ui/icons/esm/Settings';
import GroupAddIcon from '@material-ui/icons/esm/GroupAdd';
import FlagIcon from '@material-ui/icons/esm/Flag';
import PowerSettingsNewIcon from '@material-ui/icons/esm/PowerSettingsNew';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faMoon, faPlus, faIdCardAlt} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default function SidebarMenu(props) {
	let arLinks = props.routes.map(
		link => <li><Link className="chat-unread blue" to={link.path}>{link.icon}<span>{link.name}</span></Link></li>
	)

	return (
		<div className="sidebarMenu">
			<div className="logo-col">
				<Link to={arLinks[0].path}>
					<img src="assets/img/logo.png" alt=""/>
				</Link>
			</div>
			<div className="menus-col">
				<div className="chat-menus">
					<ul>
						{arLinks}
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
								<a className="dropdown-item">Profile
									<span className="profile-icon-col">
										<FontAwesomeIcon icon={faIdCardAlt}/>
									</span>
								</a>
								<a className="dropdown-item" href="/settings">
									Настройки
									<SettingsIcon/>
								</a>
								<a href="/archived">В архиве
									<FlagIcon/>
								</a>
								<a className="dropdown-item" href="/login-email">
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
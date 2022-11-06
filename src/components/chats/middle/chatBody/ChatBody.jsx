import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faClock,
	faCloudDownloadAlt,
	faCopy,
	faEllipsisH,
	faFileArchive,
	faShare,
	faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import {DoneAll, Save} from '@material-ui/icons';

export default function ChatBody(props) {

	let arChat = props.chats.map(c => <Chats
		key={c.id}
		user={c.user}
		message={c.message}
		messages={props.messages}
		users={props.users}
		chats={props.chats}
	/>)

	function Chats(props) {
		return (
			<div className={(props.users[props.user].isProprietor) ? "chats chats-right" : "chats"}>
				<div className="chat-avatar">
					<img
						src={props.users[props.user].image}
						alt="image"
						className="rounded-circle dreams_chat"
					/>
				</div>
				<div className="chat-content">
					<div className="message-content">{props.messages[props.message].message}
						<div className="chat-time">
							<div>
								<div className="time">
									<FontAwesomeIcon icon={faClock}/>
									{props.messages[props.message].time}
								</div>
							</div>
						</div>
					</div>
					<div className="chat-profile-name">
						<h6>{props.users[props.user].name}</h6>
					</div>
				</div>
				<div className="chat-action-btns ms-3">
					<div className="chat-action-col">
						<a
							data-toggle="dropdown"
							className="#"
						>
							<FontAwesomeIcon icon={faEllipsisH}/>
						</a>
						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item dream_profile_menu">
								Копировать <span><FontAwesomeIcon icon={faCopy}/></span>
							</a>
							<a className="dropdown-item">
								Сохранить <Save/>
							</a>
							<a className="dropdown-item">
								Вперед <span><FontAwesomeIcon icon={faShare}/></span>
							</a>
							<a className="dropdown-item">
								Удалить <span><FontAwesomeIcon icon={faTrashAlt}/></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="chat-body">
			<div className="messages">
				{arChat}
			</div>
		</div>
	)
}
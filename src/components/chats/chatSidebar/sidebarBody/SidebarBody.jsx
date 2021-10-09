import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {CallMissed, InsertPhoto, SettingsVoice, Videocam, PhoneDisabled} from "@material-ui/icons";

export default function SidebarBody(props) {

	function Avatar(props) {
		function Image(props) {
			return (
				<img
					src={props.image}
					alt={props.alt}
					className="rounded-circle"
				/>
			)
		}

		function Letter(props) {
			let b = props.name.length > 0 ? props.name.substr(0, 1) : '';
			return (
				<div className="letter-avatar">{b}</div>
			)
		}

		return (
			<div className={(props.status === 'online') ? 'avatar avatar-online' : 'avatar avatar-away'}>
				{
					(props.image.length > 0)
						? <Image image={props.image} alt={props.alt}/>
						: <Letter name={props.name}/>
				}

			</div>
		)
	}

	function LastText(props) {
		return (
			<p>
				{(() => {
						switch (props.lastTextType) {
							case "text":
								return props.lastText;
							case "typing":
								return (
									<span className="animate-typing-col">
									<span className="dot"></span>
									<span className="dot"></span>
									<span className="dot"></span>
								</span>
								);
							case "photo":
								return (
									<React.Fragment>
										<InsertPhoto/>
										Фото
									</React.Fragment>
								);
							case "missedCall":
								return (
									<React.Fragment>
										<CallMissed/>
										Пропущенный вызов
									</React.Fragment>
								);
							case "voiceMessage":
								return (
									<React.Fragment>
										<SettingsVoice/>
										0.25
									</React.Fragment>
								);
							case "videoCall":
								return (
									<React.Fragment>
										<Videocam/>
										{props.lastText}
									</React.Fragment>
								);
							case "cancelledCall":
								return (
									<React.Fragment>
										<PhoneDisabled/>
										Отклоненный вызов
									</React.Fragment>
								);
							default:
								return "guest";
						}
					}
				)()}
			</p>
		)
	}

	function UserlistItem(props) {
		return (
			<li className="user-list-item">
				<Avatar image={props.image} alt={props.name} status={props.status} name={props.name}/>
				<div className="users-list-body">
					<div>
						<h5>{props.name}</h5>
						<LastText lastTextType={props.lastTextType} lastText={props.lastText}/>
					</div>
					<div className="last-chat-time">
						<small className="text-muted">{props.lastTime}</small>
						{(props.mCount.length > 0 && props.mCount > 0) ?
							<div className="new-message-count">{props.mCount}</div> : ''}

					</div>
				</div>
			</li>
		)
	}

	/**
	 * @return array
	 */
	let chats = props.recentChats.map(u => <UserlistItem
		key={u.id}
		status={u.status}
		image={u.image}
		name={u.name}
		lastText={u.lastText}
		lastTextType={u.lastTextType}
		lastTime={u.lastTime}
		mCount={u.mCount}
	/>);

	return (
		<div id="chatsidebar" className="sidebar-body">
			<div
				className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
				<div className="chat-title">
					<h4>Последние чаты</h4>
				</div>
				<div className="add-section">
					<a>
						<FontAwesomeIcon icon={faEdit}/>
					</a>
				</div>
			</div>
			<ul className="user-list mt-2">
				{chats}
			</ul>
		</div>
	)
}
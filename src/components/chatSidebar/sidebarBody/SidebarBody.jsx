import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {CallMissed, InsertPhoto, SettingsVoice, Videocam, PhoneDisabled} from "@material-ui/icons";

let lastTextType = [
	'text',
	'typing',
	'photo',
	'missedCall',
	'voiceMessage',
	'cancelledCall',
	'videoCall'
]

let props = [
	{
		id: '0',
		status: 'online',
		image: 'assets/img/avatar/avatar-8.jpg',
		name: 'Ольга Александровна',
		lastTextType: 'text',
		lastText: 'Кажется логичным, что',
		lastTime: '05 мин',
		mCount: '11'
	},
	{
		id: '1',
		status: 'away',
		image: 'assets/img/avatar/avatar-9.jpg',
		name: 'Андрей Николаевич',
		lastTextType: 'text',
		lastText: 'Кажется логичным, что',
		lastTime: '05 мин',
		mCount: '14'
	},
	{
		id: '2',
		status: 'online',
		image: 'assets/img/avatar/avatar-10.jpg',
		name: 'Дмитрий Иванович',
		lastTextType: 'typing',
		lastText: 'photo',
		lastTime: '05 мин',
		mCount: ''
	},
	{
		id: '3',
		status: 'online',
		image: '',
		name: 'Иван Осин',
		lastTextType: 'cancelledCall',
		lastText: '',
		lastTime: '45 мин',
		mCount: ''
	},
	{
		id: '4',
		status: 'away',
		image: 'assets/img/avatar/avatar-11.jpg',
		name: 'Маргарита Симонян',
		lastTextType: 'missedCall',
		lastText: 'Вы у меня',
		lastTime: '52 мин',
		mCount: ''
	},
	{
		id: '5',
		status: 'away',
		image: 'assets/img/avatar/avatar-2.jpg',
		name: '#Тех поддержка',
		lastTextType: 'text',
		lastText: 'Привет!!!',
		lastTime: 'Вчера',
		mCount: '7'
	},
	{
		id: '6',
		status: 'online',
		image: '',
		name: 'Артём Г.',
		lastTextType: 'videoCall',
		lastText: 'Кажется логичным, что',
		lastTime: 'Вчера',
		mCount: ''
	},
	{
		id: '7',
		status: 'online',
		image: 'assets/img/avatar/avatar-12.jpg',
		name: 'Александр Русь',
		lastTextType: 'voiceMessage',
		lastText: '',
		lastTime: 'Вчера',
		mCount: ''
	},
	{
		id: '8',
		status: '',
		image: 'assets/img/avatar/avatar-4.jpg',
		name: 'Регина Дубовицкая',
		lastTextType: 'typing',
		lastText: 'Кажется логичным, что',
		lastTime: 'Вчера',
		mCount: ''
	},
];

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
let users = props.map(u => <UserlistItem
	key={u.id}
	status={u.status}
	image={u.image}
	name={u.name}
	lastText={u.lastText}
	lastTextType={u.lastTextType}
	lastTime={u.lastTime}
	mCount={u.mCount}
/>);

export default function SidebarBody() {
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
				{users}
			</ul>
		</div>
	)
}
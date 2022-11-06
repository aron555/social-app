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


export default function GroupBody(props) {
	let arChats = props.chats.map(
		c => <Chats
			key={c.id}
			user={c.user}
			message={c.message}
			chats={props.chats}
			users={props.users}
			messages={props.messages}
		/>
	)

	function Chats(props) {
		return (
			<div className={(props.users[props.user].isProprietor) ? 'chats chats-right' : 'chats'}>
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
				{arChats}
				{/*<Olds/>*/}
			</div>
		</div>
	)
}

function Olds() {
	return (
		<React.Fragment>

			<div className="chats chats-right">
				<div className="chat-content">
					<div className="message-content">
						Доброе утро, как дела? Как
						насчет нашей следующей встречи?
						<div className="chat-time">
							<div>
								<div className="time">
									<FontAwesomeIcon icon={faClock}/> 10:00
								</div>
							</div>
						</div>
					</div>
					<div className="chat-profile-name text-end">
						<h6>Александр</h6>
					</div>
				</div>
				<div className="chat-avatar">
					<img
						src="assets/img/avatar/avatar-12.jpg"
						alt="image"
						className="rounded-circle dreams_chat"
					/>
				</div>
				<div className="chat-action-btns me-2">
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
			<div className="chats">
				<div className="chat-avatar">
					<img
						src="assets/img/avatar/avatar-8.jpg"
						alt="image"
						className="rounded-circle dreams_chat"
					/>
				</div>
				<div className="chat-content">
					<div className="message-content">Следующая встреча завтра в 10.00 утра
						<div className="chat-time">
							<div>
								<div className="time">
									<FontAwesomeIcon icon={faClock}/> 10:06
								</div>
							</div>
						</div>
					</div>
					<div className="chat-profile-name">
						<h6>Борис Бритва</h6>
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
			<div className="chat-line"><span className="chat-date">Сегодня</span></div>
			<div className="chats chats-right">
				<div className="chat-content">
					<div className="message-content"> Вау, это здорово!
						<div className="chat-time">
							<div>
								<div className="time">
									<FontAwesomeIcon icon={faClock}/> 10:02
								</div>
							</div>
						</div>
					</div>
					<div className="chat-profile-name text-end">
						<h6>Александр</h6>
					</div>
				</div>
				<div className="chat-avatar">
					<img
						src="assets/img/avatar/avatar-12.jpg"
						alt="image"
						className="rounded-circle dreams_chat"
					/>
				</div>
				<div className="chat-action-btns me-2">
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
			<div className="chats">
				<div className="chat-avatar">
					<img
						src="assets/img/avatar/avatar-8.jpg"
						alt="image"
						className="rounded-circle dreams_chat"
					/>
				</div>
				<div className="chat-content">
					<div className="message-content">
						<div className="download-col">
							<ul>
								<li>
									<div className="image-download-col">
										<a
											href="assets/img/chat-download.jpg"
											data-fancybox="gallery" className="fancybox">
											<img src="assets/img/chat-download.jpg" alt=""/>
										</a>
										<div
											className="download-action d-flex align-items-center">
											<div>
												<a>
													<FontAwesomeIcon icon={faCloudDownloadAlt}/>
												</a>
											</div>
											<div>
												<a>
													<FontAwesomeIcon icon={faEllipsisH}/>
												</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div
										className="image-download-col image-not-download">
										<a href="assets/img/chat-download.jpg"
										   data-fancybox="gallery" className="fancybox">
											<img src="assets/img/chat-download.jpg" alt=""/>
										</a>
										<div
											className="download-action d-flex align-items-center">
											<div>
												<a>
													<i className="fas fa-cloud-download-alt"></i>
												</a>
											</div>
											<div>
												<a>
													<i className="fas fa-ellipsis-h"></i>
												</a>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div
										className="image-download-col image-not-download">
										<a href="assets/img/chat-download.jpg"
										   data-fancybox="gallery" className="fancybox">
											<img src="assets/img/chat-download.jpg" alt=""/>
										</a>
										<div
											className="download-action d-flex align-items-center">
											<div>
												<a>
													<FontAwesomeIcon icon={faCloudDownloadAlt}/>
												</a>
											</div>
											<div>
												<a>
													<FontAwesomeIcon icon={faEllipsisH}/>
												</a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className="chat-time">
							<div>
								<div className="time">
									<FontAwesomeIcon icon={faClock}/> 10:00
								</div>
							</div>
						</div>
					</div>
					<div className="chat-profile-name">
						<h6>Борис Бритва</h6>
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
			<div className="chats chats-right">
				<div className="chat-content">
					<div className="message-content">
						<div className="file-download d-flex align-items-center">
							<div
								className="file-type d-flex align-items-center justify-content-center me-2">
								<FontAwesomeIcon icon={faFileArchive}/>
							</div>
							<div className="file-details"><span
								className="file-name">filename.zip</span><span
								className="file-size">10.6MB</span></div>
							<div className="download-action d-flex align-items-center">
								<div>
									<a>
										<FontAwesomeIcon icon={faCloudDownloadAlt}/>
									</a>
								</div>
								<div>
									<a>
										<FontAwesomeIcon icon={faEllipsisH}/>
									</a>
								</div>
							</div>
						</div>
						<div className="chat-time">
							<div>
								<div className="time">
									<FontAwesomeIcon icon={faClock}/>
									10:02
								</div>
							</div>
						</div>
					</div>
					<div className="chat-profile-name text-end">
						<h6>Александр</h6>
					</div>
				</div>
				<div className="chat-avatar">
					<img
						src="assets/img/avatar/avatar-12.jpg"
						alt="image"
						className="rounded-circle dreams_chat"
					/>
				</div>
				<div className="chat-action-btns mr-2">
					<div className="chat-action-col">
						<a
							data-toggle="dropdown"
							className="#">
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
					<div className="chat-read-col">
						<DoneAll/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
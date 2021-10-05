import React from "react";
import "./ChatSidebar.css";

import GroupIcon from '@material-ui/icons/esm/Group';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CallMissed, InsertPhoto, SettingsVoice, Videocam} from "@material-ui/icons";

export default function ChatSidebar(props) {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	}

	return (
		<div className="sidebar-group left-sidebar chat_sidebar">
			<div className="slimScrollDiv">
				<div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
					<div className="slimScrollDiv">
						<div className="slimscroll">
							<div
								className="left-chat-title d-flex justify-content-between align-items-center">
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
							<div className="search_chat has-search">
								<FontAwesomeIcon icon={faSearch} className={"form-control-feedback"}/>
								<input
									id="search-contacts"
									type="text"
									placeholder="Поиск контактов"
									className="form-control chat_input"
								/>
							</div>
							<div className="top-online-contacts">

								<Slider {...settings}>

									<div className="top-contacts-box">
										<div className="profile-img online">
											<img src="assets/img/avatar/avatar-8.jpg" alt=""/>
										</div>
										<div className="profile-name">
											<span>Елена</span>
										</div>
									</div>

									<div className="top-contacts-box">
										<div className="profile-img online">
											<img src="assets/img/avatar/avatar-7.jpg" alt=""/>
										</div>
										<div className="profile-name">
											<span>Принц</span>
										</div>
									</div>

									<div className="top-contacts-box">
										<div className="profile-img online">
											<img src="assets/img/avatar/avatar-13.jpg" alt=""/>
										</div>
										<div className="profile-name">
											<span>Юра</span>
										</div>
									</div>

								</Slider>

							</div>
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
									<li className="user-list-item">
										<div className="avatar avatar-online">
											<img
												src="assets/img/avatar/avatar-8.jpg"
												alt="image"
												className="rounded-circle"
											/>
										</div>
										<div className="users-list-body">
											<div>
												<h5>Ольга Александровна</h5>
												<p>Кажется логичным, что</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">05 мин</small>
												<div className="new-message-count">11</div>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-away">
												<img
													src="assets/img/avatar/avatar-9.jpg"
													alt="image"
													className="rounded-circle"
												/>
											</div>
										</div>
										<div className="users-list-body">
											<div>
												<h5>Андрей Николаевич</h5>
												<p>Кажется логичным, что</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">05 мин</small>
												<div className="new-message-count">11</div>
											</div>
										</div>
									</li>
									<li className="user-list-item item-typing">
										<div>
											<div className="avatar avatar-online"><img
												src="assets/img/avatar/avatar-10.jpg" alt="image"
												className="rounded-circle"/></div>
										</div>
										<div className="users-list-body">
											<div>
												<h5>Дмитрий Иванович</h5>
												<p>
													<span className="animate-typing-col">
														<span className="dot"></span>
														<span className="dot"></span>
														<span className="dot"></span>
													</span>
												</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">05 мин</small>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online">
												<div className="letter-avatar"> М</div>
											</div>
										</div>
										<div className="users-list-body">
											<div>
												<h5>Иван Осин</h5>
												<p>
													<InsertPhoto/>
													Фото
												</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">45 мин</small>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online">
												<img
													src="assets/img/avatar/avatar-11.jpg"
													alt="image"
													className="rounded-circle"
												/>
											</div>
										</div>
										<div className="users-list-body">
											<div><h5>Маргарита Симонян</h5>
												<p className="missed-call-col">
													<CallMissed/>
													Пропущенный вызов
												</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">52 мин</small>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-away">
												<img
													src="assets/img/avatar/avatar-2.jpg"
													alt="image"
													className="rounded-circle"
												/>
											</div>
										</div>
										<div className="users-list-body">
											<div>
												<h5>#Тех поддержка</h5>
												<p><strong>Олег</strong> :
													Привет!!!
												</p>
											</div>
											<div className="last-chat-time"><small
												className="text-muted">Вчера</small>
												<div className="new-message-count">
													11
												</div>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online">
												<div className="letter-avatar"> А</div>
											</div>
										</div>
										<div className="users-list-body">
											<div>
												<h5>Артём Г.</h5>
												<p>
													<Videocam/>
													Кажется логичным, что
												</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">Вчера</small>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-away">
												<img
													src="assets/img/avatar/avatar-12.jpg"
													alt="image"
													className="rounded-circle"
												/>
											</div>
										</div>
										<div className="users-list-body">
											<div><h5>Александр Русь</h5>
												<p>
													<SettingsVoice/>
													0.25
												</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">Вчера</small>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online">
												<img
													src="assets/img/avatar/avatar-4.jpg"
													alt="image"
													className="rounded-circle"
												/>
											</div>
										</div>
										<div className="users-list-body">
											<div>
												<h5>Регина Дубовицкая</h5>
												<p>Кажется логичным, что</p>
											</div>
											<div className="last-chat-time">
												<small className="text-muted">Вчера</small>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
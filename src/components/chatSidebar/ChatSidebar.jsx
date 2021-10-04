import React from "react";
import "./ChatSidebar.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ChatSidebar(props) {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
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
								<div className="chat-title"><h4>CHATS</h4></div>
								<div className="add-section">
									<ul>
										<li>
											<a href="/template2/chat/group"><span
												className="material-icons">group</span>
											</a>
										</li>
										<li><a data-toggle="modal" data-target="#add-user">
											<i className="fas fa-plus"></i></a>
										</li>
									</ul>
								</div>
							</div>
							<div className="search_chat has-search">
								<span className="fas fa-search form-control-feedback"></span>
								<input
									id="search-contacts"
									type="text"
									placeholder="Search Contacts"
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
											<span>helen</span>
										</div>
									</div>

									<div className="top-contacts-box">
										<div className="profile-img online">
											<img src="assets/img/avatar/avatar-7.jpg" alt=""/>
										</div>
										<div className="profile-name">
											<span>Prince</span>
										</div>
									</div>

									<div className="top-contacts-box">
										<div className="profile-img online">
											<img src="assets/img/avatar/avatar-13.jpg" alt=""/>
										</div>
										<div className="profile-name">
											<span>Nathan</span>
										</div>
									</div>

								</Slider>

							</div>
							<div id="chatsidebar" className="sidebar-body">
								<div
									className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
									<div className="chat-title"><h4>Recent
										Chats</h4></div>
									<div className="add-section"><a><i
										className="fas fa-edit"></i></a></div>
								</div>
								<ul className="user-list mt-2">
									<li className="user-list-item">
										<div className="avatar avatar-online"><img
											src="assets/img/avatar/avatar-8.jpg"
											alt="image"
											className="rounded-circle"/>
										</div>
										<div className="users-list-body">
											<div><h5>Regina Dickerson</h5>
												<p>It seems logical that the</p></div>
											<div className="last-chat-time"><small
												className="text-muted">05
												min</small>
												<div className="new-message-count">11</div>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-away"><img
												src="assets/img/avatar/avatar-9.jpg"
												alt="image"
												className="rounded-circle"/>
											</div>
										</div>
										<div className="users-list-body">
											<div><h5>Forest Kroch</h5>
												<p>It seems logical that the</p></div>
											<div className="last-chat-time"><small
												className="text-muted">05
												min</small>
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
											<div><h5>Regina Dickerson</h5>
												<p><span
													className="animate-typing-col"><span
													className="dot"></span><span
													className="dot"></span><span
													className="dot"></span></span></p></div>
											<div className="last-chat-time"><small
												className="text-muted">05
												min</small></div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online">
												<div className="letter-avatar"> M</div>
											</div>
										</div>
										<div className="users-list-body">
											<div><h5>Townsend Seary</h5>
												<p><span className="material-icons">insert_photo</span>
													Photo</p></div>
											<div className="last-chat-time"><small
												className="text-muted">45
												min</small></div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online"><img
												src="assets/img/avatar/avatar-11.jpg" alt="image"
												className="rounded-circle"/></div>
										</div>
										<div className="users-list-body">
											<div><h5>Margaretta Worvell</h5>
												<p className="missed-call-col"><span
													className="material-icons">call_missed</span>
													Missed Call</p></div>
											<div className="last-chat-time"><small
												className="text-muted">52
												min</small></div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-away"><img
												src="assets/img/avatar/avatar-2.jpg"
												alt="image"
												className="rounded-circle"/>
											</div>
										</div>
										<div className="users-list-body">
											<div><h5>#Tech Support</h5>
												<p><strong>Haidar</strong> :
													Hi!!!</p></div>
											<div className="last-chat-time"><small
												className="text-muted">Yesterday</small>
												<div className="new-message-count">11</div>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online">
												<div className="letter-avatar"> A</div>
											</div>
										</div>
										<div className="users-list-body">
											<div><h5>Harald Kowalski</h5>
												<p><span className="material-icons">videocam</span>
													It seems logical that the</p></div>
											<div className="last-chat-time"><small
												className="text-muted">Yesterday</small>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-away"><img
												src="assets/img/avatar/avatar-12.jpg"
												alt="image"
												className="rounded-circle"/>
											</div>
										</div>
										<div className="users-list-body">
											<div><h5>Alexandr Donnelly</h5>
												<p><span className="material-icons">settings_voice</span>
													0.25</p></div>
											<div className="last-chat-time"><small
												className="text-muted">Yesterday</small>
											</div>
										</div>
									</li>
									<li className="user-list-item">
										<div>
											<div className="avatar avatar-online"><img
												src="assets/img/avatar/avatar-4.jpg" alt="image"
												className="rounded-circle"/></div>
										</div>
										<div className="users-list-body">
											<div><h5>Regina Dickerson</h5>
												<p>It seems logical that the</p></div>
											<div className="last-chat-time"><small
												className="text-muted">Yesterday</small>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="slimScrollBar"
						></div>
						<div className="slimScrollRail"
						></div>
					</div>
				</div>
				<div className="slimScrollBar"
				></div>
				<div className="slimScrollRail"
				></div>
			</div>
		</div>
	)
}
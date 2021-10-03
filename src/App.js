import React from 'react'
// import {Route} from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import LastDialogs from './components/lastDialogs/LastDialogs'
// import Profile from './components/profile/Profile'
// import Dialogs from './components/dialogs/Dialogs'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

import MessageIcon from '@material-ui/icons/esm/Message'
import GroupIcon from '@material-ui/icons/esm/Group'
import DoneAllIcon from '@material-ui/icons/esm/DoneAll'


function App(props) {
	return (
		<div className="App">
			<Header text='Site'/>
			<aside className="aside">
				<Nav/>
				<LastDialogs/>
			</aside>
			<div className="content">
				<div className="content main_content">
					<div className="sidebar-menu">
						<div className="logo-col">
							<a href="/template2/chat/chat-main">
								<img src="assets/img/logo.png" alt=""/>
							</a>
						</div>
						<div className="menus-col">
							<div className="chat-menus">
								<ul>
									<li>
										<a className="chat-unread blue" href="/template2/chat/chat-main">
											<span className="material-icons">message</span><span>Chats</span>
										</a>
									</li>
									<li>
										<a>
											<span className="material-icons">group</span><span>Groups</span>
										</a>
									</li>
									<li><a

										href="/template2/chat/status"><span
										className="material-icons">library_books</span><span
									>Status</span></a></li>
									<li><a

										href="/template2/chat/audio-call"><span
										className="material-icons">call</span><span
									>Calls</span></a></li>
									<li><a

										href="/template2/chat/settings"><span
										className="material-icons">settings</span><span
									>Settings</span></a></li>
								</ul>
							</div>
							<div className="bottom-menus">
								<ul>
									<li>
										<a data-toggle="modal" data-target="#add-new-group"><span
											className="material-icons group-add-btn">group_add</span><span
										>Add Groups</span></a></li>
									<li>
										<a data-toggle="modal" data-target="#add-contact" className="add-contacts-btn">
											<i
												className="fas fa-plus"></i><span
										>Add Contacts</span></a></li>
									<li>
										<a id="dark-mode-toggle" className="dark-mode-toggle"><i
											className="far fa-moon"></i>
										</a>
									</li>
									<li>
										<a data-toggle="dropdown" className="chat-profile-icon">
											<img
												src="assets/img/avatar/avatar-13.jpg" alt=""/>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a
												className="dropdown-item dream_profile_menu">Edit
												Profile <span className="edit-profile-icon"><i
													className="fas fa-edit"></i></span>
											</a>
											<a
												className="dropdown-item">Profile <span
												className="profile-icon-col"><i
												className="fas fa-id-card-alt"></i></span>
											</a>
											<a

												className="dropdown-item"

												href="/template2/chat/settings">Settings
												<span className="material-icons">settings</span>
											</a>
											<a href="/template2/chat/archived">Archived <span
												className="material-icons">flag</span>
											</a>
											<a
												className="dropdown-item"
												href="/template2/chat/login-email">Logout
												<span className="material-icons">power_settings_new</span></a></div>
									</li>
								</ul>
							</div>
						</div>
					</div>
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
										<div className="search_chat has-search"><span
											className="fas fa-search form-control-feedback"></span><input
											id="search-contacts" type="text" placeholder="Search Contacts"
											className="form-control chat_input"/>
										</div>
										<div className="top-online-contacts">
											<div
												className="swiper-container swiper-container-initialized swiper-container-horizontal">
												<div className="swiper-wrapper">
													<div className="swiper-slide swiper-slide-active">
														<div className="top-contacts-box">
															<div className="profile-img online"><img
																src="assets/img/avatar/avatar-8.jpg" alt=""/>
															</div>
															<div className="profile-name"><span>helen</span>
															</div>
														</div>
													</div>
													<div className="swiper-slide swiper-slide-next">
														<div className="top-contacts-box">
															<div className="profile-img online">
																<img src="assets/img/avatar/avatar-7.jpg" alt=""/>
															</div>
															<div className="profile-name"><span>Prince</span>
															</div>
														</div>
													</div>
													<div className="swiper-slide">
														<div className="top-contacts-box">
															<div className="profile-img online"><img
																src="assets/img/avatar/avatar-13.jpg" alt=""/>
															</div>
															<div className="profile-name"><span>Nathan</span>
															</div>
														</div>
													</div>
													<div className="swiper-slide">
														<div className="top-contacts-box">
															<div className="profile-img online">
																<img src="assets/img/avatar/avatar-3.jpg" alt=""/>
															</div>
															<div className="profile-name"><span>Maria</span>
															</div>
														</div>
													</div>
													<div className="swiper-slide">
														<div className="top-contacts-box">
															<div className="profile-img online"><img
																src="assets/img/avatar/avatar-4.jpg" alt=""/>
															</div>
															<div className="profile-name"><span>Prince</span>
															</div>
														</div>
													</div>
													<div className="swiper-slide"
													>
														<div className="top-contacts-box">
															<div className="profile-img online"><img
																src="assets/img/avatar/avatar-2.jpg" alt=""/>
															</div>
															<div className="profile-name"><span>Maria</span>
															</div>
														</div>
													</div>
												</div>
												<span className="swiper-notification" aria-live="assertive"
													  aria-atomic="true"></span></div>
										</div>
										<div id="chatsidebar" className="sidebar-body">
											<div
												className="left-chat-title d-flex justify-content-between align-items-center pl-0 pr-0">
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
					<div id="middle" className="chat">
						<div className="slimScrollDiv"
						>
							<div className="slimscroll">
								<div className="chat-header">
									<div className="user-details">
										<div className="d-lg-none ml-2">
											<ul className="list-inline mt-2 mr-2">
												<li className="list-inline-item"><a
													data-chat="open"
													className="text-muted px-0 left_side"><i
													className="fas fa-arrow-left"></i></a></li>
											</ul>
										</div>
										<figure className="avatar ml-1"><img
											src="assets/img/avatar/avatar-8.jpg"
											alt="image" className="rounded-circle"/>
										</figure>
										<div className="mt-1"><h5>Doris Brown</h5><small
											className="online"> Online </small></div>
									</div>
									<div className="chat-options">
										<ul className="list-inline">
											<li data-toggle="tooltip" title="" data-original-title="Search"
												className="list-inline-item"><a href="javascript:void(0)"
																				className="btn btn-outline-light chat-search-btn"><i
												className="fas fa-search"></i></a></li>
											<li data-toggle="tooltip" title="" data-original-title="Voice call"
												className="list-inline-item"><a href="javascript:void(0)"
																				data-toggle="modal"
																				data-target="#voice_call"
																				className="btn btn-outline-light"><i
												className="fas fa-phone-alt voice_chat_phone"></i></a>
											</li>
											<li data-toggle="tooltip" title="" data-original-title="Video call"
												className="list-inline-item"><a href="javascript:void(0)"
																				data-toggle="modal"
																				data-target="#video_call"
																				className="btn btn-outline-light"><i
												className="fas fa-video"></i></a>
											</li>
											<li data-toggle="tooltip" title="" data-original-title="Profile"
												className="list-inline-item dream_profile_menu"><a
												href="javascript:void(0)"
												className="btn btn-outline-light"><i
												className="fas fa-user"></i></a></li>
											<li className="list-inline-item"><a
												data-toggle="dropdown"
												className="btn btn-outline-light no-bg"><i
												className="fas fa-ellipsis-h"></i></a>
												<div className="dropdown-menu dropdown-menu-right"><a
													className="dropdown-item dream_profile_menu">Archive <span
												><i
													className="fas fa-archive"></i></span></a><a
													className="dropdown-item">Muted <span
													className="material-icons">volume_off</span></a><a
													className="dropdown-item">Delete <span
												><i
													className="far fa-trash-alt"></i></span></a></div>
											</li>
										</ul>
									</div>
									<div className="chat-search">
										<form><span
											className="fas fa-search form-control-feedback"></span><input
											type="text" name="chat-search" placeholder="Search Chats"
											className="form-control"/>
											<div className="close-btn-chat"><span
												className="material-icons">close</span>
											</div>
										</form>
									</div>
								</div>
								<div className="chat-body">
									<div className="messages">
										<div className="chats">
											<div className="chat-avatar"><img
												src="assets/img/avatar/avatar-8.jpg"
												alt="image"
												className="rounded-circle dreams_chat"/>
											</div>
											<div className="chat-content">
												<div className="message-content"> Hi James! What’s Up?
													<div className="chat-time">
														<div>
															<div className="time"><i
																className="fas fa-clock"></i> 10:00
															</div>
														</div>
													</div>
												</div>
												<div className="chat-profile-name"><h6>Doris
													Brown</h6></div>
											</div>
											<div className="chat-action-btns ml-3">
												<div className="chat-action-col"><a
													data-toggle="dropdown"
													className="#"><i
													className="fas fa-ellipsis-h"></i></a>
													<div className="dropdown-menu dropdown-menu-right"><a
														className="dropdown-item dream_profile_menu">Copy <span
													><i
														className="far fa-copy"></i></span></a><a
														className="dropdown-item">Save <span
														className="material-icons">save</span></a><a
														className="dropdown-item">Forward <span
													><i
														className="fas fa-share"></i></span></a><a
														className="dropdown-item">Delete <span
													><i className="far fa-trash-alt"></i></span></a>
													</div>
												</div>
											</div>
										</div>
										<div className="chats chats-right">
											<div className="chat-content">
												<div className="message-content"> Good morning, How are you? What
													about our next meeting?
													<div className="chat-time">
														<div>
															<div className="time"><i
																className="fas fa-clock"></i> 10:00
															</div>
														</div>
													</div>
												</div>
												<div className="chat-profile-name text-right"><h6
												>Alexandr</h6></div>
											</div>
											<div className="chat-avatar"><img
												src="assets/img/avatar/avatar-12.jpg"
												alt="image"
												className="rounded-circle dreams_chat"/>
											</div>
											<div className="chat-action-btns mr-2">
												<div className="chat-action-col"><a
													data-toggle="dropdown"
													className="#"><i
													className="fas fa-ellipsis-h"></i></a>
													<div className="dropdown-menu dropdown-menu-right"><a
														className="dropdown-item dream_profile_menu">Copy <span
													><i
														className="far fa-copy"></i></span></a><a
														className="dropdown-item">Save <span
														className="material-icons">save</span></a><a
														className="dropdown-item">Forward <span
													><i
														className="fas fa-share"></i></span></a><a
														className="dropdown-item">Delete <span
													><i className="far fa-trash-alt"></i></span></a>
													</div>
												</div>
												<div className="chat-read-col"><span
													className="material-icons">done_all</span>
												</div>
											</div>
										</div>
										<div className="chats">
											<div className="chat-avatar"><img
												src="assets/img/avatar/avatar-8.jpg"
												alt="image"
												className="rounded-circle dreams_chat"/>
											</div>
											<div className="chat-content">
												<div className="message-content"> &amp; Next meeting tomorrow 10.00AM
													<div className="chat-time">
														<div>
															<div className="time"><i
																className="fas fa-clock"></i> 10:06
															</div>
														</div>
													</div>
												</div>
												<div className="chat-profile-name"><h6>Doris
													Brown</h6></div>
											</div>
											<div className="chat-action-btns ml-3">
												<div className="chat-action-col"><a
													data-toggle="dropdown"
													className="#"><i
													className="fas fa-ellipsis-h"></i></a>
													<div className="dropdown-menu dropdown-menu-right"><a
														className="dropdown-item dream_profile_menu">Copy <span
													><i
														className="far fa-copy"></i></span></a><a
														className="dropdown-item">Save <span
														className="material-icons">save</span></a><a
														className="dropdown-item">Forward <span
													><i
														className="fas fa-share"></i></span></a><a
														className="dropdown-item">Delete <span
													><i className="far fa-trash-alt"></i></span></a>
													</div>
												</div>
											</div>
										</div>
										<div className="chat-line"><span
											className="chat-date">Today</span></div>
										<div className="chats chats-right">
											<div className="chat-content">
												<div className="message-content"> Wow Thats Great
													<div className="chat-time">
														<div>
															<div className="time"><i
																className="fas fa-clock"></i> 10:02
															</div>
														</div>
													</div>
												</div>
												<div className="chat-profile-name text-right"><h6
												>Alexandr</h6></div>
											</div>
											<div className="chat-avatar"><img
												src="assets/img/avatar/avatar-12.jpg"
												alt="image"
												className="rounded-circle dreams_chat"/>
											</div>
											<div className="chat-action-btns mr-2">
												<div className="chat-action-col"><a
													data-toggle="dropdown"
													className="#"><i
													className="fas fa-ellipsis-h"></i></a>
													<div className="dropdown-menu dropdown-menu-right"><a
														className="dropdown-item dream_profile_menu">Copy <span
													><i
														className="far fa-copy"></i></span></a><a
														className="dropdown-item">Save <span
														className="material-icons">save</span></a><a
														className="dropdown-item">Forward <span
													><i
														className="fas fa-share"></i></span></a><a
														className="dropdown-item">Delete <span
													><i className="far fa-trash-alt"></i></span></a>
													</div>
												</div>
												<div className="chat-read-col"><span
													className="material-icons">done_all</span>
												</div>
											</div>
										</div>
										<div className="chats">
											<div className="chat-avatar"><img
												src="assets/img/avatar/avatar-8.jpg"
												alt="image"
												className="rounded-circle dreams_chat"/>
											</div>
											<div className="chat-content">
												<div className="message-content">
													<div className="download-col">
														<ul>
															<li>
																<div className="image-download-col"><a
																	href="assets/img/chat-download.jpg"
																	data-fancybox="gallery" className="fancybox"><img
																	src="assets/img/chat-download.jpg" alt=""/></a>
																	<div
																		className="download-action d-flex align-items-center">
																		<div><a><i

																			className="fas fa-cloud-download-alt"></i></a>
																		</div>
																		<div><a><i
																			className="fas fa-ellipsis-h"></i></a>
																		</div>
																	</div>
																</div>
															</li>
															<li>
																<div
																	className="image-download-col image-not-download"><a
																	href="assets/img/chat-download.jpg"
																	data-fancybox="gallery" className="fancybox"><img
																	src="assets/img/chat-download.jpg" alt=""/></a>
																	<div
																		className="download-action d-flex align-items-center">
																		<div><a><i

																			className="fas fa-cloud-download-alt"></i></a>
																		</div>
																		<div><a><i
																			className="fas fa-ellipsis-h"></i></a>
																		</div>
																	</div>
																</div>
															</li>
															<li>
																<div
																	className="image-download-col image-not-download"><a
																	href="assets/img/chat-download.jpg"
																	data-fancybox="gallery" className="fancybox"><img
																	src="assets/img/chat-download.jpg" alt=""/></a>
																	<div
																		className="download-action d-flex align-items-center">
																		<div><a><i

																			className="fas fa-cloud-download-alt"></i></a>
																		</div>
																		<div><a><i
																			className="fas fa-ellipsis-h"></i></a>
																		</div>
																	</div>
																</div>
															</li>
														</ul>
													</div>
													<div className="chat-time">
														<div>
															<div className="time"><i
																className="fas fa-clock"></i> 10:00
															</div>
														</div>
													</div>
												</div>
												<div className="chat-profile-name"><h6>Doris
													Brown</h6></div>
											</div>
											<div className="chat-action-btns ml-3">
												<div className="chat-action-col"><a
													data-toggle="dropdown"
													className="#"><i
													className="fas fa-ellipsis-h"></i></a>
													<div className="dropdown-menu dropdown-menu-right"><a
														className="dropdown-item dream_profile_menu">Copy <span
													><i
														className="far fa-copy"></i></span></a><a
														className="dropdown-item">Save <span
														className="material-icons">save</span></a><a
														className="dropdown-item">Forward <span
													><i
														className="fas fa-share"></i></span></a><a
														className="dropdown-item">Delete <span
													><i className="far fa-trash-alt"></i></span></a>
													</div>
												</div>
											</div>
										</div>
										<div className="chats chats-right">
											<div className="chat-content">
												<div className="message-content">
													<div className="file-download d-flex align-items-center">
														<div
															className="file-type d-flex align-items-center justify-content-center mr-2">
															<i
																className="far fa-file-archive"></i></div>
														<div className="file-details"><span
															className="file-name">filename.zip</span><span
															className="file-size">10.6MB</span></div>
														<div className="download-action d-flex align-items-center">
															<div><a><i
																className="fas fa-cloud-download-alt"></i></a>
															</div>
															<div><a><i
																className="fas fa-ellipsis-h"></i></a>
															</div>
														</div>
													</div>
													<div className="chat-time">
														<div>
															<div className="time"><i
																className="fas fa-clock"></i> 10:02
															</div>
														</div>
													</div>
												</div>
												<div className="chat-profile-name text-right"><h6
												>Alexandr</h6></div>
											</div>
											<div className="chat-avatar"><img
												src="assets/img/avatar/avatar-12.jpg"
												alt="image"
												className="rounded-circle dreams_chat"/>
											</div>
											<div className="chat-action-btns mr-2">
												<div className="chat-action-col"><a
													data-toggle="dropdown"
													className="#"><i
													className="fas fa-ellipsis-h"></i></a>
													<div className="dropdown-menu dropdown-menu-right"><a
														className="dropdown-item dream_profile_menu">Copy <span
													><i
														className="far fa-copy"></i></span></a><a
														className="dropdown-item">Save <span
														className="material-icons">save</span></a><a
														className="dropdown-item">Forward <span
													><i
														className="fas fa-share"></i></span></a><a
														className="dropdown-item">Delete <span
													><i className="far fa-trash-alt"></i></span></a>
													</div>
												</div>
												<div className="chat-read-col"><span
													className="material-icons">done_all</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="slimScrollBar"
							></div>
							<div className="slimScrollRail"
							></div>
						</div>
						<div className="chat-footer">
							<form>
								<div className="smile-col"><a><i
									className="far fa-smile"></i></a>
								</div>
								<div className="attach-col"><a><i
									className="fas fa-paperclip"></i></a>
								</div>
								<input type="text" placeholder="Enter Message....."
									   className="form-control chat_form"/>
								<div className="form-buttons">
									<button type="submit" className="btn send-btn"><span
										className="material-icons">send</span>
									</button>
								</div>
								<div className="specker-col"><a><span
									className="material-icons">settings_voice</span></a>
								</div>
							</form>
						</div>
					</div>
					<div id="middle1" className="right-sidebar right_sidebar_profile">
						<div className="right-sidebar-wrap active">
							<div className="slimScrollDiv"
							>
								<div className="slimscroll">
									<div
										className="left-chat-title d-flex justify-content-between align-items-center p-3">
										<div className="chat-title"><h4>PROFILE</h4></div>
										<div className="contact-close_call text-right"><a
											className="close_profile close_profile4"><span
											className="material-icons">close</span></a></div>
									</div>
									<div className="sidebar-body">
										<div className="mt-0 right_sidebar_logo">
											<div className="text-center mb-2 right-sidebar-profile">
												<figure className="avatar avatar-xl mb-3"><img
													src="assets/img/avatar/avatar-2.jpg"
													alt="image"
													className="rounded-circle"/>
												</figure>
												<h5 className="profile-name">Scott Albright</h5>
												<div className="online-profile"><span
												>online</span></div>
											</div>
											<div>
												<div className="about-media-tabs">
													<nav>
														<div id="nav-tab"
															 className="nav nav-tabs justify-content-center"><a
															id="nav-home-tab"
															data-toggle="tab"
															href="#about"
															className="nav-item nav-link active">About</a><a
															id="nav-profile-tab" data-toggle="tab"
															href="#media" className="nav-item nav-link">Media</a></div>
													</nav>
													<div id="nav-tabContent" className="tab-content">
														<div id="about" className="tab-pane fade show active"><p
														>If several languages coalesce, the grammar of the
															resulting language is more simple and regular than that of
															the
															individual.</p>
															<div className="member-details">
																<ul>
																	<li><h6>Phone</h6><span
																	>555-555-21541</span></li>
																	<li><h6>Nick Name</h6>
																		<span>Alberywo</span></li>
																	<li><h6>Email</h6><span
																	>Alberywo@gmail.com</span></li>
																</ul>
															</div>
															<div className="social-media-col"><h6
															>Social media accounts</h6>
																<ul>
																	<li><a><i
																		className="fab fa-facebook-f"></i></a>
																	</li>
																	<li><a><i
																		className="fab fa-twitter"></i></a></li>
																	<li><a><i
																		className="fab fa-youtube"></i></a></li>
																	<li><a><i
																		className="fab fa-instagram"></i></a></li>
																	<li><a><i
																		className="fab fa-linkedin-in"></i></a>
																	</li>
																</ul>
															</div>
															<div className="settings-col"><h6>
																Settings</h6>
																<ul>
																	<li className="d-flex align-items-center"><label
																		className="switch"><input
																		type="checkbox" checked=""/><span
																		className="slider round"></span></label>
																		<div><span
																		>Block</span></div>
																	</li>
																	<li className="d-flex align-items-center"><label
																		className="switch"><input
																		type="checkbox"/><span
																		className="slider round"></span></label>
																		<div><span
																		>Mute</span></div>
																	</li>
																	<li className="d-flex align-items-center"><label
																		className="switch"><input
																		type="checkbox"/><span
																		className="slider round"></span></label>
																		<div><span>Get notification</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div id="media" className="tab-pane fade">
															<div className="file-download-col">
																<ul>
																	<li>
																		<div className="image-download-col"><a

																			href="assets/img/chat-download.jpg"
																			data-fancybox="gallery"
																			className="fancybox"><img
																			src="assets/img/chat-download.jpg"
																			alt=""/></a>
																			<div
																				className="download-action d-flex align-items-center">
																				<div><a><i

																					className="fas fa-cloud-download-alt"></i></a>
																				</div>
																				<div><a><i

																					className="fas fa-ellipsis-h"></i></a>
																				</div>
																			</div>
																		</div>
																	</li>
																	<li>
																		<div className="image-download-col"><a

																			href="assets/img/chat-download.jpg"
																			data-fancybox="gallery"
																			className="fancybox"><img
																			src="assets/img/chat-download.jpg"
																			alt=""/></a>
																			<div
																				className="download-action d-flex align-items-center">
																				<div><a><i

																					className="fas fa-cloud-download-alt"></i></a>
																				</div>
																				<div><a><i

																					className="fas fa-ellipsis-h"></i></a>
																				</div>
																			</div>
																		</div>
																	</li>
																	<li>
																		<div className="image-download-col"><a

																			href="assets/img/chat-download.jpg"
																			data-fancybox="gallery"
																			className="fancybox"><img
																			src="assets/img/chat-download.jpg"
																			alt=""/></a>
																			<div
																				className="download-action d-flex align-items-center">
																				<div><a><i

																					className="fas fa-cloud-download-alt"></i></a>
																				</div>
																				<div><a><i

																					className="fas fa-ellipsis-h"></i></a>
																				</div>
																			</div>
																		</div>
																	</li>
																	<li>
																		<div className="image-download-col"><a

																			href="assets/img/chat-download.jpg"
																			data-fancybox="gallery"
																			className="fancybox"><img
																			src="assets/img/chat-download.jpg"
																			alt=""/></a>
																			<div
																				className="download-action d-flex align-items-center">
																				<div><a><i

																					className="fas fa-cloud-download-alt"></i></a>
																				</div>
																				<div><a><i

																					className="fas fa-ellipsis-h"></i></a>
																				</div>
																			</div>
																		</div>
																	</li>
																	<li>
																		<div className="image-download-col"><a

																			href="assets/img/chat-download.jpg"
																			data-fancybox="gallery"
																			className="fancybox"><img
																			src="assets/img/chat-download.jpg"
																			alt=""/></a>
																			<div
																				className="download-action d-flex align-items-center">
																				<div><a><i

																					className="fas fa-cloud-download-alt"></i></a>
																				</div>
																				<div><a><i

																					className="fas fa-ellipsis-h"></i></a>
																				</div>
																			</div>
																		</div>
																	</li>
																	<li>
																		<div className="image-download-col"><a

																			href="assets/img/chat-download.jpg"
																			data-fancybox="gallery"
																			className="fancybox"><img
																			src="assets/img/chat-download.jpg"
																			alt=""/></a>
																			<div
																				className="download-action d-flex align-items-center">
																				<div><a><i

																					className="fas fa-cloud-download-alt"></i></a>
																				</div>
																				<div><a><i

																					className="fas fa-ellipsis-h"></i></a>
																				</div>
																			</div>
																		</div>
																	</li>
																	<li className="full-width text-center"><a
																		className="load-more-btn">More 154 Files
																		<i className="fas fa-sort-down"></i></a></li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="report-col">
										<ul>
											<li><a><span
												className="material-icons">report_problem</span>
												Report Chat</a></li>
											<li><a><span><i
												className="far fa-trash-alt"></i></span> Delete Chat</a></li>
										</ul>
									</div>
								</div>
								<div className="slimScrollBar"
								></div>
								<div className="slimScrollRail"
								></div>
							</div>
						</div>
					</div>
				</div>
				<button className='btn btn-primary'><DoneAllIcon/> <MessageIcon/> <GroupIcon/> Примари <FontAwesomeIcon
					icon={faChevronDown}/>
				</button>
			</div>
		</div>
	);
}

export default App;

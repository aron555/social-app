import React from 'react'
// import {Route} from 'react-router-dom';


import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
import ChatSidebar from "./components/chatSidebar/ChatSidebar";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LastDialogs from './components/lastDialogs/LastDialogs';
// import Profile from './components/profile/Profile';
// import Dialogs from './components/dialogs/Dialogs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


function App(props) {
	return (
		<div className="App">
			<div className="main-wrapper">
				<div className="content main_content">

					<SidebarMenu/>

					<ChatSidebar/>

					<div id="middle" className="chat">
						<div className="slimScrollDiv">
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
										<figure className="avatar ml-1">
											<img
												src="assets/img/avatar/avatar-8.jpg"
												alt="image"
												className="rounded-circle"
											/>
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

					<Header text='Site'/>
					<aside className="aside">
						<Nav/>
						<LastDialogs/>
					</aside>
					<button className='btn btn-primary'> Примари <FontAwesomeIcon
						icon={faChevronDown}/>
					</button>

				</div>

			</div>
		</div>
	);
}

export default App;

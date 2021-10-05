import React from "react";
import "./RightSidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Close} from "@material-ui/icons";


export default function RightSidebar(props) {
	return (
		<div id="middle1" className="right-sidebar right_sidebar_profile">
			<div className="right-sidebar-wrap active">
				<div className="slimScrollDiv">
					<div className="slimscroll">
						<div
							className="left-chat-title d-flex justify-content-between align-items-center p-3">
							<div className="chat-title">
								<h4>Профиль</h4>
							</div>
							<div className="contact-close_call text-right">
								<a className="close_profile close_profile4">
									<Close/>
								</a>
							</div>
						</div>
						<div className="sidebar-body">
							<div className="mt-0 right_sidebar_logo">
								<div className="text-center mb-2 right-sidebar-profile">
									<figure className="avatar avatar-xl mb-3">
										<img
											src="assets/img/avatar/avatar-2.jpg"
											alt="image"
											className="rounded-circle"
										/>
									</figure>
									<h5 className="profile-name">
										Павел Дуров
									</h5>
									<div className="online-profile">
										<span>онлайн</span>
									</div>
								</div>
								<div>
									<div className="about-media-tabs">
										<nav>
											<div id="nav-tab"
												 className="nav nav-tabs justify-content-center">
												<a
													id="nav-home-tab"
													data-toggle="tab"
													href="#about"
													className="nav-item nav-link active">
													Обо мне
												</a>
												<a
													id="nav-profile-tab" data-toggle="tab"
													href="#media" className="nav-item nav-link">
													Медиа
												</a>
											</div>
										</nav>
										<div id="nav-tabContent" className="tab-content">
											<div id="about" className="tab-pane fade show active">
												<p>
													Если несколько языков объединяются, грамматика
													получившегося языка будет более простой и правильной, чем грамматика
													отдельного человека.
												</p>
												<div className="member-details">
													<ul>
														<li>
															<h6>Телефон</h6>
															<span>555-555-21541</span>
														</li>
														<li>
															<h6>Никнейм</h6>
															<span>durov</span>
														</li>
														<li>
															<h6>Email</h6>
															<span>durov@gmail.com</span>
														</li>
													</ul>
												</div>
												<div className="social-media-col"><h6
												>Соц сети</h6>
													<ul>
														<li>
															<a>
																<i className="fab fa-facebook-f"></i>
															</a>
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
															<div>
																<span>Заблокировать</span>
															</div>
														</li>
														<li className="d-flex align-items-center"><label
															className="switch"><input
															type="checkbox"/><span
															className="slider round"></span></label>
															<div>
																<span>Без взука</span>
															</div>
														</li>
														<li className="d-flex align-items-center"><label
															className="switch"><input
															type="checkbox"/><span
															className="slider round"></span></label>
															<div><span>Получать уведомления</span>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div id="media" className="tab-pane fade">
												<div className="file-download-col">
													<ul>
														<li>
															<div className="image-download-col">
																<a
																	href="assets/img/chat-download.jpg"
																	data-fancybox="gallery"
																	className="fancybox">
																	<img
																		src="assets/img/chat-download.jpg"
																		alt=""/>
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
															<div className="image-download-col">
																<a
																	href="assets/img/chat-download.jpg"
																	data-fancybox="gallery"
																	className="fancybox">
																	<img src="assets/img/chat-download.jpg" alt=""/>
																</a>
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
															className="load-more-btn">Более 154 км
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
								<li><a>
									<span className="material-icons">report_problem</span>
									Пожаловаться
								</a>
								</li>
								<li>
									<a>
										<span>
									<i className="far fa-trash-alt"></i>
								</span> Удалить чат
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
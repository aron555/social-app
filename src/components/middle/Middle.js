import React from "react";
import "./Middle.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faArchive,
	faArrowLeft, faClock, faCloudDownloadAlt,
	faCopy,
	faEllipsisH, faFileArchive, faPaperclip,
	faPhoneAlt,
	faSearch, faShare, faSmile, faTrashAlt,
	faUser,
	faVideo
} from "@fortawesome/free-solid-svg-icons";
import {Close, DoneAll, Save, Send, SettingsVoice, VolumeOff} from "@material-ui/icons";

export default function Middle(props) {
	return (
		<div id="middle" className="chat">
			<div className="slimScrollDiv">
				<div className="slimscroll">
					<div className="chat-header">
						<div className="user-details">
							<div className="d-lg-none ml-2">
								<ul className="list-inline mt-2 mr-2">
									<li className="list-inline-item">
										<a data-chat="open" className="text-muted px-0 left_side">
											<FontAwesomeIcon icon={faArrowLeft}/>
										</a>
									</li>
								</ul>
							</div>
							<figure className="avatar ms-1">
								<img
									src="assets/img/avatar/avatar-8.jpg"
									alt="image"
									className="rounded-circle"
								/>
							</figure>
							<div className="mt-1"><h5>Владимир Владимирович</h5><small
								className="online"> Онлайн </small></div>
						</div>
						<div className="chat-options">
							<ul className="list-inline">
								<li data-toggle="tooltip" title="" data-original-title="Поиск"
									className="list-inline-item">
									<a href="" className="btn btn-outline-light chat-search-btn">
										<FontAwesomeIcon icon={faSearch}/>
									</a>
								</li>
								<li data-toggle="tooltip" title="" data-original-title="Голосовой вызов"
									className="list-inline-item">
									<a
										href=""
										data-toggle="modal"
										data-target="#voice_call"
										className="btn btn-outline-light"
									>
										<FontAwesomeIcon icon={faPhoneAlt} className={"voice_chat_phone"}/>
									</a>
								</li>
								<li data-toggle="tooltip" title="" data-original-title="Видеовызов"
									className="list-inline-item">
									<a
										href=""
										data-toggle="modal"
										data-target="#video_call"
										className="btn btn-outline-light"
									>
										<FontAwesomeIcon icon={faVideo}/>
									</a>
								</li>
								<li data-toggle="tooltip" title="" data-original-title="Profile"
									className="list-inline-item dream_profile_menu">
									<a
										href=""
										className="btn btn-outline-light"
									>
										<FontAwesomeIcon icon={faUser}/>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										data-toggle="dropdown"
										className="btn btn-outline-light no-bg"
									>
										<FontAwesomeIcon icon={faEllipsisH}/>
									</a>
									<div className="dropdown-menu dropdown-menu-right">
										<a className="dropdown-item dream_profile_menu">
											Архив <span><FontAwesomeIcon icon={faArchive}/></span>
										</a>
										<a className="dropdown-item">Без звука
											<VolumeOff/>
										</a>
										<a className="dropdown-item">
											Удалить <span><FontAwesomeIcon icon={faTrashAlt}/></span>
										</a>
									</div>
								</li>
							</ul>
						</div>
						<div className="chat-search">
							<form>
								<FontAwesomeIcon icon={faSearch} className={"form-control-feedback"}/>
								<input
									type="text"
									name="chat-search"
									placeholder="Search Chats"
									className="form-control"
								/>
								<div className="close-btn-chat">
									<Close/>
								</div>
							</form>
						</div>
					</div>
					<div className="chat-body">
						<div className="messages">
							<div className="chats">
								<div className="chat-avatar">
									<img
										src="assets/img/avatar/avatar-8.jpg"
										alt="image"
										className="rounded-circle dreams_chat"
									/>
								</div>
								<div className="chat-content">
									<div className="message-content"> Привет, брат! Как дела?
										<div className="chat-time">
											<div>
												<div className="time">
													<FontAwesomeIcon icon={faClock}/>
													10:00
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
									<div className="chat-profile-name text-right">
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
								<div className="chat-avatar"><img
									src="assets/img/avatar/avatar-8.jpg"
									alt="image"
									className="rounded-circle dreams_chat"/>
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
							<div className="chat-line"><span
								className="chat-date">Сегодня</span></div>
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
									<div className="chat-profile-name text-right">
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
									<div className="chat-profile-name text-right">
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
						</div>
					</div>
				</div>
			</div>
			<div className="chat-footer">
				<form>
					<div className="smile-col">
						<a>
							<FontAwesomeIcon icon={faSmile}/>
						</a>
					</div>
					<div className="attach-col">
						<a>
							<FontAwesomeIcon icon={faPaperclip}/>
						</a>
					</div>
					<input type="text" placeholder="Введите сообщение....."
						   className="form-control chat_form"/>
					<div className="form-buttons">
						<button type="submit" className="btn send-btn">
							<Send/>
						</button>
					</div>
					<div className="specker-col">
						<a>
							<SettingsVoice/>
						</a>
					</div>
				</form>
			</div>
		</div>
	)
}
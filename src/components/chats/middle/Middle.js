import React from "react";
import "./Middle.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faArchive,
	faArrowLeft,
	faEllipsisH,
	faPhoneAlt,
	faSearch,
	faTrashAlt,
	faUser,
	faVideo
} from "@fortawesome/free-solid-svg-icons";
import {VolumeOff} from "@material-ui/icons";
import ChatBody from "./chatBody/ChatBody";
import ChatSearch from "./chatSearch/ChatSearch";
import ChatFooter from "./chatFooter/ChatFooter";

export default function Middle() {
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
						<ChatSearch/>
					</div>
					<ChatBody/>
				</div>
			</div>
			<ChatFooter/>
		</div>
	)
}
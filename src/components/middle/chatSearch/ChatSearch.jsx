import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Close} from "@material-ui/icons";

export default function ChatSearch() {
	return (
		<div className="chat-search">
			<form>
				<FontAwesomeIcon icon={faSearch} className={"form-control-feedback"}/>
				<input
					type="text"
					name="chat-search"
					placeholder="Поиск чата"
					className="form-control"
				/>
				<div className="close-btn-chat">
					<Close/>
				</div>
			</form>
		</div>
	)
}
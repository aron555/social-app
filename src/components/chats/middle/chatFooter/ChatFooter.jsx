import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip, faSmile} from "@fortawesome/free-solid-svg-icons";
import {Send, SettingsVoice} from "@material-ui/icons";
import React from "react";


export default function ChatFooter() {
	return (
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
					<button type="submit" className="btn send-btn" onClick="">
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
	)
}
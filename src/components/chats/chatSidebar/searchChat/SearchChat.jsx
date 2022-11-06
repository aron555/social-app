import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function SearchChat() {
    return (
        <div className="search_chat has-search">
            <FontAwesomeIcon icon={faSearch} className={"form-control-feedback"}/>
            <input
                id="search-contacts"
                type="text"
                placeholder="Поиск контактов"
                className="form-control chat_input"
            />
        </div>
    )
}
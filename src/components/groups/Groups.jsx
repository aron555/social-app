import React from 'react';
import GroupsSidebar from './groupsSidebar/GroupsSidebar';
import GroupMiddle from './groupMiddle/GroupMiddle';

export default function Groups(props) {
    return (
        <React.Fragment>
            <GroupsSidebar/>
            <GroupMiddle users={props.users} messages={props.messages} chats={props.chats}/>
        </React.Fragment>
    )
}
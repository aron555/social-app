import React from "react";
import GroupsSidebar from "./groupsSidebar/GroupsSidebar";
import GroupMiddle from "./groupMiddle/GroupMiddle";

export default function Groups() {
	return (
		<React.Fragment>
			<GroupsSidebar/>
			<GroupMiddle/>
		</React.Fragment>
	)
}
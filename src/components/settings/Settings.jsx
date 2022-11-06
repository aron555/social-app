import React from "react";
import SettingsLeftSidebar from "./settingsLeftSidebar/SettingsLeftSidebar";
import SettingsMain from "./settingsMain/SettingsMain";

export default function Settings() {
    return (
        <React.Fragment>
            <SettingsLeftSidebar/>
            <SettingsMain/>
        </React.Fragment>
    )
}
import React from 'react';

export default function SettingsLeftSidebar() {
    return (
        <React.Fragment>
            <div className="sidebar-group left-sidebar chat_sidebar">
                <div className="slimScrollDiv">
                    <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                        <div className="slimScrollDiv">
                            <div className="slimscroll">
                                <div
                                    className="left-chat-title d-flex justify-content-between align-items-center">
                                    <div className="chat-title">
                                        <h4>PROFILE</h4>
                                    </div>
                                    <div className="btn-section">
                                        <button className="btn logout-btn">Sign out</button>
                                    </div>
                                </div>
                                <div className="search_chat has-search">
                                    <span className="fas fa-search form-control-feedback"></span>
                                    <input id="search-contacts" type="text" placeholder="Search Contacts"
                                           className="form-control chat_input"/>
                                </div>
                                <div className="settings-option">
                                    <a className="user-list-item">
                                        Edit Settings
                                    </a>
                                </div>
                                <div className="profile-card">
                                    <div className="profile-cover text-center mb-3">
                                        <label
                                            htmlFor="avatar_upload"
                                            className="profile-cover-avatar">
                                            <img
                                                src="assets/img/avatar/avatar-10.jpg"
                                                alt="Profile Image"
                                                className="avatar-img"/>
                                            <input
                                                type="file" id="avatar_upload"/>
                                            <span className="avatar-edit">
											<svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="feather feather-edit-2 avatar-uploader-icon shadow-soft"><path

                                                d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
											</span>
                                        </label>
                                        <h5 className="mt-3 profile-name mb-1">Michelle Green</h5>
                                        <p className="profile-email mb-1">michelle.green@gmail.com</p>
                                        <h5 className="profile-country mb-0">USA</h5>
                                    </div>
                                    <div className="profile-info">
                                        <div className="text-center mb-4">
                                            <p className="info-title mb-0">Phone</p>
                                            <span className="info-text">555-555-21541</span>
                                        </div>
                                        <div className="text-center mb-4">
                                            <p className="info-title mb-0">Nick Name</p>
                                            <span className="info-text">Alberywo</span>
                                        </div>
                                        <div className="text-center mb-4">
                                            <p className="info-title mb-0">Email</p>
                                            <span className="info-text">alberywo@gmail.com</span>
                                        </div>
                                        <ul className="social-nav p-0 mb-0 text-center">
                                            <li>
                                                <a><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a><i className="fab fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a><i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li>
                                                <a><i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a><i className="fab fa-youtube"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="settings-card">
                                    <div className="settings-control">
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <div>
                                                    <span>Desktop Notification</span>
                                                </div>
                                                <label className="switch ml-auto">
                                                    <input type="checkbox" checked=""/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div>
                                                    <span>Sound Notification</span>
                                                </div>
                                                <label className="switch ml-auto">
                                                    <input type="checkbox"/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div>
                                                    <span>Profile privacy</span>
                                                </div>
                                                <label className="switch ml-auto">
                                                    <input type="checkbox"/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div>
                                                    <span>Two-step security verification</span>
                                                </div>
                                                <label className="switch ml-auto">
                                                    <input type="checkbox"/>
                                                    <span className="slider round"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="settings-footer">
                                        <ul className="p-0 mb-0">
                                            <li>
                                                <a><i className="fas fa-chevron-right"></i>
                                                    Need Help? Let's chat
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <i className="fas fa-chevron-right"></i>
                                                    English (united States)
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="profile-update text-center py-4">
                                            <button
                                                type="button"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                className="btn btn-block btn-update mb-0"
                                            >
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
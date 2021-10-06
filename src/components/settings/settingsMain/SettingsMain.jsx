import React from "react";

export default function SettingsMain() {
	return (
		<React.Fragment>
			<div id="middle" className="chat settings-main pt-2">
				<div className="slimScrollDiv">
					<div className="slimscroll">
						<div className="page-header d-flex align-items-center">
							<div className="me-3 d-md-block d-lg-none">
								<a className="text-muted px-0 left_side">
									<i className="fas fa-arrow-left"></i>
								</a>
							</div>
							<div>
								<h5>SETTINGS</h5>
								<p>Last Update your profile: 29 Aug 2020</p>
							</div>
						</div>
						<div className="settings-tab my-4">
							<nav>
								<div id="nav-tab" className="nav nav-tabs">
									<a
										id="nav-home-tab"
										data-toggle="tab"
										href="#general"
										className="nav-item nav-link active"
									>
										General Settings
									</a>
									<a
										id="nav-profile-tab"
										data-toggle="tab"
										href="#notifications"
										className="nav-item nav-link">
										Notification
									</a>
									<a
										id="nav-profile-tab1" data-toggle="tab" href="#history"
										className="nav-item nav-link">
										Device History
									</a>
									<a
										id="nav-profile-tab2"
										data-toggle="tab"
										href="#security"
										className="nav-item nav-link">
										Security
									</a>
								</div>
							</nav>
							<div className="tab-content settings-form">
								<div id="general" className="tab-pane fade show active">
									<div className="settings-header">
										<h5>Account Settings</h5>
										<p>Update your account details</p>
									</div>
									<div className="settings-control p-3">
										<div className="form-col form-body">
											<form action="/chat/chat-main">
												<div className="row">
													<div className="col-md-6 col-xl-4">
														<div className="form-group">
															<label>First Name</label>
															<input
																name="first-name" type="text"
																className="form-control form-control-lg group_formcontrol"/>
														</div>
													</div>
													<div className="col-md-6 col-xl-4">
														<div className="form-group"><label>Last Name</label>
															<input
																name="last-name" type="text"
																className="form-control form-control-lg group_formcontrol"/>
														</div>
													</div>
													<div className="col-md-6 col-xl-4">
														<div className="form-group">
															<label>Phone Number</label>
															<input
																name="phone-number" type="text"
																className="form-control form-control-lg group_formcontrol"/>
														</div>
													</div>
													<div className="col-md-6 col-xl-4">
														<div className="form-group"><label
														>Nick name <span
														>(Optional)</span></label><input
															name="nick-name" type="text"
															className="form-control form-control-lg group_formcontrol"/>
														</div>
													</div>
													<div className="col-md-6 col-xl-4">
														<div className="form-group"><label>Choose profile
															picture</label>
															<div
																className="custom-input-file form-control form-control-lg group_formcontrol">
																<input type="file"/><span className="browse-btn">Browse File</span>
															</div>
														</div>
													</div>
													<div className="col-md-6 col-xl-4">
														<div className="form-group">
															<label>Location</label>
															<input
																name="location" type="text"
																className="form-control form-control-lg group_formcontrol"/>
														</div>
													</div>
													<div className="col-md-12 col-xl-12">
														<div className="form-group"><label>Bio</label>
															<textarea
																className="form-control form-control-lg group_formcontrol"
															></textarea>
														</div>
													</div>
												</div>
											</form>
										</div>
										<hr/>
										<div className="social-settings">
											<h4>Social Links</h4>
											<div className="form-col form-body">
												<form action="/chat/chat-main">
													<div className="row">
														<div className="col-md-6 col-xl-4">
															<div className="form-group">
																<input name="facebook" type="text"
																	   placeholder="Facebook Link"
																	   className="form-control form-control-lg group_formcontrol"/>
															</div>
														</div>
														<div className="col-md-6 col-xl-4">
															<div className="form-group">
																<input
																	name="twitter" type="text"
																	placeholder="Twitter Link"
																	className="form-control form-control-lg group_formcontrol"/>
															</div>
														</div>
														<div className="col-md-6 col-xl-4">
															<div className="form-group">
																<input
																	name="instagram" type="text"
																	placeholder="Instagram Link"
																	className="form-control form-control-lg group_formcontrol"/>
															</div>
														</div>
														<div className="col-md-6 col-xl-4">
															<div className="form-group">
																<input
																	name="linkedin" type="text"
																	placeholder="Linkedin Link"
																	className="form-control form-control-lg group_formcontrol"/>
															</div>
														</div>
														<div className="col-md-6 col-xl-4">
															<div className="form-group">
																<input
																	name="youtube" type="text"
																	placeholder="Youtube Link"
																	className="form-control form-control-lg group_formcontrol"/>
															</div>
														</div>
													</div>
													<div
														className="form-row profile_form m-0 align-items-center">
														<div className="me-4">
															<button type="button" className="btn btn-update mb-0">
																Update Details
															</button>
														</div>
														<div className="cancel-btn">
															<a data-dismiss="modal" aria-label="Close">
																Cancel
															</a>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
									<div className="settings-delete mt-4">
										<div
											className="row align-items-center justify-content-between">
											<div className="col-md-8"><h5
											>Delete your account</h5><p
											>Please note, deleting your account is a permanent
												action and will no be recoverable once completed.</p></div>
											<div className="col-md-4">
												<button type="button" data-toggle="modal"
														data-target="#delete-account"
														className="btn btn-delete mb-0"> Delete Account
												</button>
											</div>
										</div>
									</div>
								</div>
								<div id="notifications" className="tab-pane fade">
									<div className="settings-header">
										<h5>Notifications</h5>
										<p>Update your account Notifications</p>
									</div>
									<div className="settings-control full-options">
										<ul>
											<li className="d-flex align-items-center">
												<label className="switch me-3">
													<input type="checkbox" defaultChecked/>
													<span className="slider round"></span>
												</label>
												<div>
													<span>Allow mobile notifications</span>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<label className="switch me-3">
													<input type="checkbox" defaultChecked/>
													<span className="slider round"></span>
												</label>
												<div>
													<span>Notifications from your friends</span>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<label className="switch me-3">
													<input type="checkbox"/>
													<span className="slider round"></span>
												</label>
												<div>
													<span>Send notifications by email</span>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<label className="switch me-3">
													<input type="checkbox" defaultChecked/>
													<span className="slider round"></span>
												</label>
												<div>
													<span>Allow connected contacts</span>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<label className="switch me-3">
													<input type="checkbox" defaultChecked/>
													<span className="slider round"></span>
												</label>
												<div>
													<span>Confirm message requests</span>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<label className="switch me-3">
													<input type="checkbox"/>
													<span className="slider round"></span>
												</label>
												<div>
													<span>Profile privacy</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div id="history" className="tab-pane fade">
									<div className="settings-header">
										<div className="row align-items-center">
											<div className="col-md-8">
												<h5>Device History</h5>
												<p>
													If you see a device here that you believe wasn’t you, please contact
													our
													account fraud department immediately.
												</p>
											</div>
											<div className="col-md-4 text-md-end">
												<button className="btn logout-btn">
													Log out all Devices
												</button>
											</div>
										</div>
									</div>
									<div className="logged-devices-settings">
										<div className="logged-device align-items-center d-flex">
											<div className="device-details">
												<h5>IPhone 11</h5>
												<p>Brownsville, VT · Jun 11 at 10:05am</p>
											</div>
											<div className="logged-btn me-auto">
												<a>Sign Out</a>
											</div>
										</div>
										<div className="logged-device align-items-center d-flex">
											<div className="device-details">
												<h5>IMac OSX · Safari 10.2</h5>
												<p>Brownsville, VT · Jun 11 at 10:05am</p>
											</div>
											<div className="logged-btn me-auto">
												<a>Sign Out</a>
											</div>
										</div>
										<div className="logged-device align-items-center d-flex">
											<div className="device-details">
												<h5>HP Laptop Win10</h5>
												<p>Brownsville, VT · Jun 11 at 10:05am</p></div>
											<div className="logged-btn ms-auto"><
												a>Sign Out</a></div>
										</div>
										<div className="logged-device align-items-center d-flex">
											<div className="device-details">
												<h5>IMac OSX · Edge browser</h5>
												<p>Brownsville, VT · Jun 11 at 10:05am</p>
											</div>
											<div className="logged-btn ms-auto">
												<a>Sign Out</a>
											</div>
										</div>
									</div>
								</div>
								<div id="security" className="tab-pane fade">
									<div className="settings-header">
										<div className="row align-items-center">
											<div className="col-md-8">
												<h5>Change your password</h5>
												<p>
													We will email you a confirmation when changing
													your password, so please expect that email after submitting.
												</p>
											</div>
											<div className="col-md-4 text-md-end">
												<button className="btn logout-btn">
													Forgot password
												</button>
											</div>
										</div>
									</div>
									<div className="security-settings">
										<div className="password-updation">
											<div className="row">
												<div className="col-xl-4">
													<div className="form-col form-body">
														<form action="/chat/chat-main">
															<div className="form-group">
																<label>Current password</label>
																<input
																	name="current-password"
																	type="password"
																	className="form-control form-control-lg group_formcontrol"
																/>
															</div>
															<div className="form-group"><label>New password</label>
																<input
																	name="new-password"
																	type="password"
																	className="form-control form-control-lg group_formcontrol"
																/>
															</div>
															<div className="form-group">
																<label>Confirm password</label>
																<input
																	name="confirm-password"
																	type="password"
																	className="form-control form-control-lg group_formcontrol"
																/>
															</div>
															<div
																className="form-row profile_form m-0 align-items-center">
																<div className="me-4">
																	<button
																		type="button"
																		className="btn btn-update mb-0"
																	>
																		Update Password
																	</button>
																</div>
																<div className="cancel-btn">
																	<a data-dismiss="modal"
																	   aria-label="Close">Cancel</a>
																</div>
															</div>
														</form>
													</div>
												</div>
												<div className="col-xl-8">
													<div className="requirment-card">
														<h4>Password requirements</h4>
														<p className="py-3 mb-0">To create a new
															password, you have to meet all of the following
															requirements:</p>
														<div className="requirements-list">
															<p>Minimum 8 character</p>
															<p>At least one special character</p>
															<p>
																At least one number
															</p>
															<p>
																Can’t be the same as a previous password
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<hr/>
										<div className="authentication">
											<h4>Two Factor Authentication</h4>
											<div className="align-items-center">
												<label className="custom-radio me-2">
													Password <br/>
													<span>
														<a data-toggle="modal" data-target="#password-authentication">
															edit
														</a>
													</span>
													<input type="radio" name="radio"/>
													<span className="checkmark"></span>
												</label>
												<label className="custom-radio me-2">
													Sequrity Question <br/>
													<span>
														<a
															data-toggle="modal"
															data-target="#question-authentication">
															edit
														</a>
													</span>
													<input
														type="radio" name="radio"/>
													<span className="checkmark"></span>
												</label>
											</div>
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